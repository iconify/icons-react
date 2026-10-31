import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0jc5rbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0jc5rbnc"/>`,
		"fallback": "coolicons:list-check-fill-round",
	});
}

export default Component;
