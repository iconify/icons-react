import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g152-dbzo.css';
import '../../css/a/amu7dtb3y.css';
import '../../css/y/ya-pqcc8r.css';
import '../../css/c/ctkmt3brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g152-dbzo"/><path class="amu7dtb3y"/><path class="ya-pqcc8r"/><path class="ctkmt3brq"/></g>`,
		"fallback": "andrsrxn:thermometer-temperature",
	});
}

export default Component;
