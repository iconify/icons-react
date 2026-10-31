import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gctimrg3l.css';
import '../../css/k/kwbfh4cci.css';
import '../../css/e/e5d6i1b_e.css';
import '../../css/n/nhfptgbij.css';
import '../../css/y/yg497jbnw.css';
import '../../css/y/yhpz6pbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gctimrg3l wm-shadow"/><path class="kwbfh4cci"/><path class="e5d6i1b_e"/><path class="nhfptgbij"/><path class="yg497jbnw"/><path class="yhpz6pbdw"/></g>`,
		"fallback": "withicons-retro:vault",
	});
}

export default Component;
