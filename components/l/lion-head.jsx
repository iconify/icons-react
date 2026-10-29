import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vn9hj2b6u.css';
import '../../css/l/li6hocbgp.css';
import '../../css/x/x3x3c_b5w.css';
import '../../css/j/jys1ei-qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vn9hj2b6u wm-k"/><path class="li6hocbgp wm-k"/><path class="x3x3c_b5w"/><path class="jys1ei-qk wm-s"/></g>`,
		"fallback": "withicons-bauhaus:lion-head",
	});
}

export default Component;
