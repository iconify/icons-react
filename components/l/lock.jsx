import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uxw27rbus.css';
import '../../css/k/kh79f8giu.css';
import '../../css/o/olut8cbbc.css';
import '../../css/y/y2wq6oazd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uxw27rbus wm-shadow"/><path class="kh79f8giu"/><path class="olut8cbbc"/><path class="y2wq6oazd"/></g>`,
		"fallback": "withicons-retro:lock",
	});
}

export default Component;
