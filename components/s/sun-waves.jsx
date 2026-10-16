import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1ywazu1y.css';
import '../../css/z/z3ed83bqz.css';
import '../../css/p/pm8axf8uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 11.97 12.31)" class="n1ywazu1y"/><path class="z3ed83bqz"/><path class="pm8axf8uu"/></g>`,
		"fallback": "andrsrxn:sun-waves",
	});
}

export default Component;
