import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p8flmhbrr.css';
import '../../css/l/lsg8msbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p8flmhbrr"/><path vector-effect="non-scaling-stroke" class="lsg8msbeo"/></g>`,
		"fallback": "wordpress:justify-space-evenly",
	});
}

export default Component;
