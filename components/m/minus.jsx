import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ocwpv4bkp.css';
import '../../css/s/s4fk5icew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ocwpv4bkp"/><path class="s4fk5icew"/></g>`,
		"fallback": "withicons-retro:minus",
	});
}

export default Component;
