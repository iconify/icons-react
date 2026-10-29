import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/emsr7ugpn.css';
import '../../css/i/iokftfwqy.css';
import '../../css/e/e-0e7kekg.css';
import '../../css/o/oqdxdpjwb.css';
import '../../css/b/bb8vnzh5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="emsr7ugpn wm-k"/><path class="iokftfwqy wm-a"/><path class="e-0e7kekg wm-shadow"/><path class="oqdxdpjwb wm-k"/><path class="bb8vnzh5z wm-a"/></g>`,
		"fallback": "withicons:percent-engrave",
	});
}

export default Component;
