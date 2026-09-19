import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/guuex1n9c.css';
import '../../css/j/jbe-vzczt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="guuex1n9c"/><path class="jbe-vzczt"/></g>`,
		"fallback": "icon-park-outline:turn-on",
	});
}

export default Component;
