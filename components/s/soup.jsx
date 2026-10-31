import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyzax4b4o.css';
import '../../css/t/t-0neabvh.css';
import '../../css/m/meu-v5bde.css';
import '../../css/d/d35sesbku.css';
import '../../css/o/oqddpvq6q.css';
import '../../css/h/h4fmc3xzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oyzax4b4o wm-k"/><path class="t-0neabvh wm-a"/><path class="meu-v5bde wm-deco"/><path class="d35sesbku wm-k"/><path class="oqddpvq6q wm-a"/><path class="h4fmc3xzb wm-shadow"/></g>`,
		"fallback": "withicons-valentine:soup",
	});
}

export default Component;
