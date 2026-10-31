import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm9o7dbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm9o7dbqe"/>`,
		"fallback": "coolicons:square-dashed-square-bottom-right-fill-round",
	});
}

export default Component;
