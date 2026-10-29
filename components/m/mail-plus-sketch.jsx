import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/km0ygpb3n.css';
import '../../css/g/g_8368xec.css';
import '../../css/w/wnpmo9f2g.css';
import '../../css/t/th_pupb0n.css';
import '../../css/d/d9pr4ebmt.css';
import '../../css/e/ez0qwxbtf.css';
import '../../css/m/m4hmxbbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="km0ygpb3n"/><path class="g_8368xec wm-k"/><path class="wm-a wnpmo9f2g"/><path class="th_pupb0n wm-s"/><path class="d9pr4ebmt wm-k"/><path class="ez0qwxbtf wm-a"/><path class="m4hmxbbxc wm-s"/></g>`,
		"fallback": "withicons:mail-plus-sketch",
	});
}

export default Component;
