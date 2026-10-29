import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/camcnmb1b.css';
import '../../css/d/dljqukb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="camcnmb1b"/><path class="dljqukb2t wm-a"/></g>`,
		"fallback": "withicons:presentation",
	});
}

export default Component;
