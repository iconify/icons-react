import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bknvfvbng.css';
import '../../css/q/qmjmvubhz.css';
import '../../css/s/sdf4ccc-d.css';
import '../../css/v/vbhw-1bec.css';
import '../../css/o/o2vm0kbuj.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="bknvfvbng"/><path class="qmjmvubhz"/><path class="sdf4ccc-d wm-shine"/><path class="vbhw-1bec wm-k"/><path class="o2vm0kbuj wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:projector",
	});
}

export default Component;
