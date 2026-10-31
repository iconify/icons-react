import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/brnw3yb8d.css';
import '../../css/i/iti46pajo.css';
import '../../css/v/vaddffiao.css';
import '../../css/p/psgmu884p.css';
import '../../css/b/b2n8qcoxh.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="brnw3yb8d"/><path class="iti46pajo"/><path class="vaddffiao wm-shine"/><path class="psgmu884p wm-k"/><path class="b2n8qcoxh wm-a"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:save-all",
	});
}

export default Component;
