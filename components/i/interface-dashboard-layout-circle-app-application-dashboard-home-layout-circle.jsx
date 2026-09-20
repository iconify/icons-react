import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s7k_w0bmy.css';
import '../../css/p/p29514frd.css';
import '../../css/s/s74f9qbtc.css';
import '../../css/v/vnefgbc0t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="s7k_w0bmy"/><circle class="p29514frd"/><circle class="s74f9qbtc"/><circle class="vnefgbc0t"/></g>`,
		"fallback": "streamline:interface-dashboard-layout-circle-app-application-dashboard-home-layout-circle",
	});
}

export default Component;
