import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l0kcx-bur.css';
import '../../css/d/d0lh95rjb.css';
import '../../css/x/xl67sbtid.css';
import '../../css/f/focknpd0m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l0kcx-bur"/><path class="d0lh95rjb"/><path class="xl67sbtid"/><path class="focknpd0m"/></g>`,
		"fallback": "devicon:opengl",
	});
}

export default Component;
