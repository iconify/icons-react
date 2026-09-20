import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/if_w8upnf.css';
import '../../css/b/bqhqz_9_r.css';
import '../../css/k/kk6lmubmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="if_w8upnf"/><path class="bqhqz_9_r"/><path class="kk6lmubmz"/></g>`,
		"fallback": "solar:walking-round-linear",
	});
}

export default Component;
