import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfd6k31jt.css';
import '../../css/k/k_nwkqbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zfd6k31jt"/><path class="k_nwkqbfv"/></g>`,
		"fallback": "lets-icons:rain",
	});
}

export default Component;
