import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/ly-p7gg9e.css';
import '../../css/j/jv4g7pbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ly-p7gg9e"/><path vector-effect="non-scaling-stroke" class="jv4g7pbeb"/></g>`,
		"fallback": "wordpress:video",
	});
}

export default Component;
