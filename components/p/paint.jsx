import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbgt9vbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbgt9vbfe"/>`,
		"fallback": "boxicons:paint",
	});
}

export default Component;
