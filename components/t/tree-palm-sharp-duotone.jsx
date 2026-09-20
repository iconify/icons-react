import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/km8t0nbnq.css';
import '../../css/b/bsycqubto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="km8t0nbnq"/><path class="bsycqubto"/></g>`,
		"fallback": "keyline-icons:tree-palm-sharp-duotone",
	});
}

export default Component;
