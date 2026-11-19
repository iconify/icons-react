import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6y5mdbok.css';
import '../../css/z/z0m2wbbuy.css';
import '../../css/b/bhp-7fbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k6y5mdbok"/><path class="z0m2wbbuy"/><path class="bhp-7fbla"/></g>`,
		"fallback": "andrsrxn:store-off",
	});
}

export default Component;
