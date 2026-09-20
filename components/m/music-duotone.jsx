import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rscdq9bxz.css';
import '../../css/y/y3964j9du.css';
import '../../css/u/ugx24zbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rscdq9bxz"/><path class="y3964j9du"/><path class="ugx24zbbm"/></g>`,
		"fallback": "lets-icons:music-duotone",
	});
}

export default Component;
