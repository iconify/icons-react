import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4se-c4fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4se-c4fp"/>`,
		"fallback": "coolicons:square-dashed-square-top-left-round",
	});
}

export default Component;
