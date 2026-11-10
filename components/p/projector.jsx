import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z3g16ccxi.css';
import '../../css/k/kxf05zbtb.css';
import '../../css/y/yrocvf_fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z3g16ccxi"/><path class="kxf05zbtb"/><path class="yrocvf_fw"/></g>`,
		"fallback": "andrsrxn:projector",
	});
}

export default Component;
