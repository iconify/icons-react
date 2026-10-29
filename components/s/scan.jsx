import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oye_q3fhr.css';
import '../../css/v/vq_y3vp5k.css';
import '../../css/v/vj77h6eyt.css';
import '../../css/g/g29ybgzbd.css';
import '../../css/j/jk4vc4b5t.css';
import '../../css/p/p22tphf1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oye_q3fhr wm-k"/><path class="vq_y3vp5k wm-k"/><path class="vj77h6eyt wm-k"/><path class="g29ybgzbd wm-a"/><path class="jk4vc4b5t wm-a"/><path class="p22tphf1q wm-a"/></g>`,
		"fallback": "withicons-anime:scan",
	});
}

export default Component;
