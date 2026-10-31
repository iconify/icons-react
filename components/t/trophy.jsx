import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/o3d-qee9v.css';
import '../../css/w/wgrn9ietc.css';
import '../../css/k/k3bcclbor.css';
import '../../css/x/x6cjcpbgz.css';
import '../../css/x/xrk4p-wug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="o3d-qee9v wm-shadow"/><path class="wgrn9ietc wm-shadow"/><path class="k3bcclbor"/><path class="x6cjcpbgz"/><path class="xrk4p-wug"/></g>`,
		"fallback": "withicons-brutal:trophy",
	});
}

export default Component;
