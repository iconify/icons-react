import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qyzhdabhz.css';
import '../../css/g/gx-683zln.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="qyzhdabhz"/><rect class="gx-683zln"/></g>`,
		"fallback": "streamline:interface-setting-menu-2-alternate-button-parallel-horizontal-lines-menu-navigation-staggered-thick",
	});
}

export default Component;
