import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/cg6kdjb7f.css';
import '../../css/q/q0038buok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="cg6kdjb7f"/><path class="q0038buok"/></g>`,
		"fallback": "reicon:login2",
	});
}

export default Component;
