import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tpr0bvb0k.css';
import '../../css/k/kiehcdbvr.css';
import '../../css/v/vmdz79bcv.css';
import '../../css/j/j2rgm4wke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tpr0bvb0k"/><path class="kiehcdbvr"/><rect class="vmdz79bcv"/><path class="j2rgm4wke"/></g>`,
		"fallback": "andrsrxn:seek-backward-rtl",
	});
}

export default Component;
