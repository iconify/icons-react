import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uhthibbqc.css';
import '../../css/v/vrcdcnbpw.css';
import '../../css/s/s-916eebg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="uhthibbqc"/><path class="vrcdcnbpw wm-k"/><path class="s-916eebg wm-a"/></g>`,
		"fallback": "withicons-kawaii:rose-bouquet",
	});
}

export default Component;
