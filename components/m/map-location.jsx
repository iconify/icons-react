import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ee4z0tbxr.css';
import '../../css/w/wmi76k58w.css';
import '../../css/r/r1eqj6buy.css';
import '../../css/a/adae7tq6c.css';
import '../../css/p/pet88pbnd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ee4z0tbxr"/><path class="wmi76k58w"/><path class="r1eqj6buy"/><path class="adae7tq6c"/><path class="pet88pbnd"/></g>`,
		"fallback": "streamline-flex-color:map-location",
	});
}

export default Component;
