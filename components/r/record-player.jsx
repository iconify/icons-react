import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq-u71lgj.css';
import '../../css/w/w9afpybff.css';
import '../../css/r/r381vd14m.css';
import '../../css/g/g5fitnk0m.css';
import '../../css/s/s4tl1h9xi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="nq-u71lgj"/><path class="w9afpybff"/><circle class="r381vd14m"/><circle class="g5fitnk0m"/><path class="s4tl1h9xi"/></g>`,
		"fallback": "icon-park-outline:record-player",
	});
}

export default Component;
