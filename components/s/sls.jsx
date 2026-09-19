import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rio7b8pmk.css';
import '../../css/y/yo0j_cc9l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="rio7b8pmk"/><path class="yo0j_cc9l"/></g>`,
		"fallback": "cryptocurrency-color:sls",
	});
}

export default Component;
