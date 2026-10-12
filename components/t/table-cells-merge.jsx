import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6ir9kbok.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/j/j-pdq8_8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 21.24 9.14)" class="j6ir9kbok"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="j-pdq8_8l"/></g>`,
		"fallback": "andrsrxn:table-cells-merge",
	});
}

export default Component;
