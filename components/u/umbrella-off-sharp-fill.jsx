import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ex4ysobuo.css';
import '../../css/n/ngnkltbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ex4ysobuo"/><path class="ngnkltbkn"/></g>`,
		"fallback": "keyline-icons:umbrella-off-sharp-fill",
	});
}

export default Component;
