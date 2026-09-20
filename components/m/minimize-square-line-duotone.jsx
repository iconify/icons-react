import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qyt4n4h5f.css';
import '../../css/h/hid_d3u1e.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qyt4n4h5f"/><path class="hid_d3u1e"/><path class="wf89k6buf"/></g>`,
		"fallback": "solar:minimize-square-line-duotone",
	});
}

export default Component;
