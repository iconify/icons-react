import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/ttyx58b8p.css';
import '../../css/w/wd179sblu.css';
import '../../css/t/tbcqlw_dm.css';
import '../../css/y/yj738hauy.css';
import '../../css/d/d9_j61pyo.css';
import '../../css/d/drvys7b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ttyx58b8p wm-shadow"/><path class="wd179sblu"/><path class="tbcqlw_dm"/><path class="yj738hauy"/><path class="d9_j61pyo"/><path class="drvys7b2t"/></g>`,
		"fallback": "withicons-retro:play",
	});
}

export default Component;
