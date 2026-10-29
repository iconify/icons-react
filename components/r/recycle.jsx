import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpm45zxlf.css';
import '../../css/h/hc8k8ubtr.css';
import '../../css/m/m36yv5bge.css';
import '../../css/z/zsm7vykbb.css';
import '../../css/r/rvbmluy2d.css';
import '../../css/n/n54jbo4jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dpm45zxlf wm-k"/><path class="hc8k8ubtr wm-k"/><path class="m36yv5bge wm-k"/><path class="wm-a zsm7vykbb"/><path class="rvbmluy2d wm-a"/><path class="n54jbo4jc wm-a"/></g>`,
		"fallback": "withicons-anime:recycle",
	});
}

export default Component;
