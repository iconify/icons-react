import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x6ba-xb2f.css';
import '../../css/b/b0hy6mbvk.css';
import '../../css/v/v3y8w8e7t.css';
import '../../css/q/qmkx05daq.css';
import '../../css/b/b9lfvgbtk.css';
import '../../css/l/ltuducynh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow x6ba-xb2f"/><path class="b0hy6mbvk"/><path class="v3y8w8e7t"/><path class="qmkx05daq"/><path class="b9lfvgbtk"/><path class="ltuducynh"/></g>`,
		"fallback": "withicons-retro:mouse",
	});
}

export default Component;
