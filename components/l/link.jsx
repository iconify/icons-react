import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqu73ccux.css';
import '../../css/c/ccr-r5nke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqu73ccux"/><path class="ccr-r5nke"/>`,
		"fallback": "bx:link",
	});
}

export default Component;
