import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f_e85pptu.css';
import '../../css/e/eakhoh0xe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f_e85pptu"/><path class="eakhoh0xe"/></g>`,
		"fallback": "hugeicons:system-update-02",
	});
}

export default Component;
