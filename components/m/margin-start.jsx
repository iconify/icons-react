import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eabul8rer.css';
import '../../css/h/hxrih7jad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eabul8rer"/><path class="hxrih7jad"/></g>`,
		"fallback": "andrsrxn:margin-start",
	});
}

export default Component;
