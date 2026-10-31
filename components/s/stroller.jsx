import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g-qt3pb7y.css';
import '../../css/x/xy07-mb-g.css';
import '../../css/u/u5doe7h9f.css';
import '../../css/g/gw-yddcae.css';
import '../../css/i/i2kmntbut.css';
import '../../css/o/o18osub4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g-qt3pb7y wm-shadow"/><path class="xy07-mb-g"/><path class="u5doe7h9f"/><path class="gw-yddcae"/><path class="i2kmntbut"/><path class="o18osub4q"/></g>`,
		"fallback": "withicons-retro:stroller",
	});
}

export default Component;
