import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xozg72bpw.css';
import '../../css/r/r7xk8o29f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xozg72bpw"/><path vector-effect="non-scaling-stroke" class="r7xk8o29f"/></g>`,
		"fallback": "wordpress:justify-space-evenly",
	});
}

export default Component;
