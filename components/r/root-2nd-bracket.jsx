import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1u_4ebyr.css';
import '../../css/h/hq47cobmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k1u_4ebyr"/><path class="hq47cobmz"/></g>`,
		"fallback": "hugeicons:root-2nd-bracket",
	});
}

export default Component;
