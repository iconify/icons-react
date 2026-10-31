import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d7xew_bau.css';
import '../../css/f/fkevoibzi.css';
import '../../css/f/f6a0ngb9b.css';
import '../../css/r/rqh2feb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="d7xew_bau wm-shadow"/><path class="fkevoibzi wm-shadow"/><path class="f6a0ngb9b"/><path class="rqh2feb-y"/></g>`,
		"fallback": "withicons-brutal:utensils",
	});
}

export default Component;
