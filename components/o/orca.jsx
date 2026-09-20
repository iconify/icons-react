import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr24jkwsh.css';
import '../../css/a/ao18k45ue.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/ducf-wbyw.css';
import '../../css/n/nhrj7sblw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr24jkwsh"/><path class="ao18k45ue"/><g class="ij2x_72vy"><path class="ducf-wbyw"/><path class="nhrj7sblw"/></g>`,
		"fallback": "openmoji:orca",
	});
}

export default Component;
