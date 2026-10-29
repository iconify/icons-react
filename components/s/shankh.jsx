import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zig6tvcnc.css';
import '../../css/f/fxvau7b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="zig6tvcnc"/><path class="fxvau7b5w"/></g>`,
		"fallback": "withicons-bauhaus:shankh",
	});
}

export default Component;
