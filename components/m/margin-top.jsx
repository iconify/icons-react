import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-5iqjbat.css';
import '../../css/u/u-3q1pwrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v-5iqjbat"/><path class="u-3q1pwrk"/></g>`,
		"fallback": "andrsrxn:margin-top",
	});
}

export default Component;
