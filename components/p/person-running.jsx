import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hcw0ud_aw.css';
import '../../css/h/hg7sox2kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hcw0ud_aw"/><path class="hg7sox2kn"/></g>`,
		"fallback": "withicons-retro:person-running",
	});
}

export default Component;
