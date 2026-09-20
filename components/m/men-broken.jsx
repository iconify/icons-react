import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o6xw0cclu.css';
import '../../css/g/gv_ugy92l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o6xw0cclu"/><path class="gv_ugy92l"/></g>`,
		"fallback": "solar:men-broken",
	});
}

export default Component;
