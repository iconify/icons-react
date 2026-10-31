import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/axgtqm-rm.css';
import '../../css/c/c4cou6gnm.css';
import '../../css/b/b-3l01n7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="axgtqm-rm wm-shadow"/><path class="c4cou6gnm"/><path class="b-3l01n7f"/></g>`,
		"fallback": "withicons-retro:upload",
	});
}

export default Component;
