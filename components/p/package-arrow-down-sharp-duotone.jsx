import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c42n_vo5g.css';
import '../../css/y/yexjwyeak.css';
import '../../css/o/oqg1t9yep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="c42n_vo5g"/><path class="yexjwyeak"/><path class="oqg1t9yep"/></g>`,
		"fallback": "keyline-icons:package-arrow-down-sharp-duotone",
	});
}

export default Component;
