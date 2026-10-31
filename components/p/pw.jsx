import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8_ayybzs.css';
import '../../css/y/yckz_vbuh.css';

const viewBox = {"width":301,"height":189};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8_ayybzs"/><circle class="yckz_vbuh"/></g>`,
		"fallback": "cif:pw",
	});
}

export default Component;
