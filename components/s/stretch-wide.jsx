import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fit-g3b4d.css';
import '../../css/e/eqlu-lb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fit-g3b4d"/><path vector-effect="non-scaling-stroke" class="eqlu-lb8h"/></g>`,
		"fallback": "wordpress:stretch-wide",
	});
}

export default Component;
