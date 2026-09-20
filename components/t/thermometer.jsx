import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ocbidvo5d.css';
import '../../css/o/o84a2hbem.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ocbidvo5d"/><path class="o84a2hbem"/></g>`,
		"fallback": "streamline-flex:thermometer",
	});
}

export default Component;
