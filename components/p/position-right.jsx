import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nv0vmkdfg.css';
import '../../css/f/fit-g3b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="nv0vmkdfg"/><path class="fit-g3b4d"/></g>`,
		"fallback": "wordpress:position-right",
	});
}

export default Component;
