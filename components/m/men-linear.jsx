import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eg5cwhtid.css';
import '../../css/g/gv_ugy92l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="eg5cwhtid"/><path class="gv_ugy92l"/></g>`,
		"fallback": "solar:men-linear",
	});
}

export default Component;
