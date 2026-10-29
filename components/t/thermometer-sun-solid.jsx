import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/idnkkabej.css';
import '../../css/l/l4eea2gkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="idnkkabej"/><path class="l4eea2gkm wm-a"/></g>`,
		"fallback": "withicons:thermometer-sun-solid",
	});
}

export default Component;
