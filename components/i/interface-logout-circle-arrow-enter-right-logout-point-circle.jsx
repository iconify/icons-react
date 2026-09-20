import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wne6m1blv.css';
import '../../css/v/vql8tobbv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wne6m1blv"/><path class="vql8tobbv"/></g>`,
		"fallback": "streamline:interface-logout-circle-arrow-enter-right-logout-point-circle",
	});
}

export default Component;
