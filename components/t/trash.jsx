import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x7u6hmb4m.css';
import '../../css/w/wed_lvbsc.css';
import '../../css/q/qmi1_hbad.css';
import '../../css/r/rdbai8brp.css';
import '../../css/k/kyhj7mluc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow x7u6hmb4m"/><path class="wed_lvbsc"/><path class="qmi1_hbad"/><path class="rdbai8brp"/><path class="kyhj7mluc"/></g>`,
		"fallback": "withicons-retro:trash",
	});
}

export default Component;
