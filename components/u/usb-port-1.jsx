import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/di4___b_m.css';
import '../../css/m/msrbc2b2g.css';
import '../../css/s/s819s4b2p.css';
import '../../css/n/nxb2auxle.css';
import '../../css/d/di-1wbckg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="di4___b_m"/><path class="msrbc2b2g"/><path class="s819s4b2p"/><path class="nxb2auxle"/><path class="di-1wbckg"/></g>`,
		"fallback": "streamline-ultimate-color:usb-port-1",
	});
}

export default Component;
