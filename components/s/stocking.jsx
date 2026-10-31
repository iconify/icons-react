import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hw9_m3m1v.css';
import '../../css/a/al7lgrbhe.css';
import '../../css/c/cnqhwmi6w.css';
import '../../css/j/jfv_pmbql.css';
import '../../css/x/xpe4oo__z.css';
import '../../css/l/l7b397b0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hw9_m3m1v wm-shadow"/><path class="al7lgrbhe"/><path class="cnqhwmi6w"/><path class="jfv_pmbql"/><path class="xpe4oo__z"/><path class="l7b397b0j"/></g>`,
		"fallback": "withicons-retro:stocking",
	});
}

export default Component;
