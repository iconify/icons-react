import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/n/n_z-l2n3x.css';
import '../../css/w/we6kc7bcw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="n_z-l2n3x"/><path class="we6kc7bcw"/></g>`,
		"fallback": "lsicon:thermo-dynamic-outline",
	});
}

export default Component;
