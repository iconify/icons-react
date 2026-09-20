import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f9bv6mbbv.css';
import '../../css/i/iy-ryi24k.css';
import '../../css/y/yph-txb3i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="f9bv6mbbv"/><path class="iy-ryi24k"/><rect class="yph-txb3i"/></g>`,
		"fallback": "streamline:interface-user-square-alternate-square-geometric-human-person-single-user",
	});
}

export default Component;
