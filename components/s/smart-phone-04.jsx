import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pnsqwrb-c.css';
import '../../css/f/fpwsxbb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pnsqwrb-c"/><path class="fpwsxbb_k"/></g>`,
		"fallback": "hugeicons:smart-phone-04",
	});
}

export default Component;
