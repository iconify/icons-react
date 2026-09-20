import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u2k281qqc.css';
import '../../css/j/j6-4mlbyu.css';
import '../../css/o/oj7ascbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u2k281qqc"/><path class="j6-4mlbyu"/><path class="oj7ascbsc"/></g>`,
		"fallback": "keyline-icons:smartphone-cast-duotone",
	});
}

export default Component;
