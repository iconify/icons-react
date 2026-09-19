import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6zsdgblk.css';
import '../../css/x/xdgne4bek.css';
import '../../css/i/i0_3hn3oc.css';
import '../../css/w/w_lebqosk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k6zsdgblk"/><path class="xdgne4bek"/><path class="i0_3hn3oc"/><circle class="w_lebqosk"/></g>`,
		"fallback": "icon-park-outline:rabbit-zodiac",
	});
}

export default Component;
