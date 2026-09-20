import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oz9hfkbew.css';
import '../../css/q/qga6kg3zc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="oz9hfkbew"/><rect class="qga6kg3zc"/></g>`,
		"fallback": "streamline:interface-setting-menu-1-alternate-button-parallel-horizontal-lines-menu-navigation-two-thick",
	});
}

export default Component;
