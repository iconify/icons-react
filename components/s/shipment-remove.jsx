import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qz7ijd4sz.css';
import '../../css/j/jcw3uxb9v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qz7ijd4sz"/><path class="jcw3uxb9v"/></g>`,
		"fallback": "streamline:shipment-remove",
	});
}

export default Component;
