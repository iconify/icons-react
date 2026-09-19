import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kzqan2p5w.css';
import '../../css/o/oej4z_j8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kzqan2p5w"/><path class="oej4z_j8h"/></g>`,
		"fallback": "bi:sign-yield-fill",
	});
}

export default Component;
