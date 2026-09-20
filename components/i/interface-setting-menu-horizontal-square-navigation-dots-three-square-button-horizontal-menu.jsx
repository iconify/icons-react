import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/c/cq971jbmr.css';
import '../../css/w/w6nbzdegc.css';
import '../../css/y/ygi3hj8ab.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="yph-txb3i"/><circle class="cq971jbmr"/><circle class="w6nbzdegc"/><circle class="ygi3hj8ab"/></g>`,
		"fallback": "streamline:interface-setting-menu-horizontal-square-navigation-dots-three-square-button-horizontal-menu",
	});
}

export default Component;
