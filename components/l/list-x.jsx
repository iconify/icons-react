import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmi75ue4w.css';
import '../../css/v/vod5frf-f.css';
import '../../css/m/mapbceb2b.css';
import '../../css/x/x8wkqt3dl.css';
import '../../css/m/mbwpq7l1a.css';
import '../../css/z/zwp04vl6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qmi75ue4w wm-k"/><path class="vod5frf-f wm-k"/><path class="mapbceb2b wm-k"/><path class="wm-s x8wkqt3dl"/><path class="mbwpq7l1a wm-s"/><path class="wm-s zwp04vl6b"/></g>`,
		"fallback": "withicons-anime:list-x",
	});
}

export default Component;
