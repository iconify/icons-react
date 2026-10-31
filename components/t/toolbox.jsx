import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mxn1xcbxn.css';
import '../../css/r/ryuwp6bae.css';
import '../../css/y/yw2kh5b8s.css';
import '../../css/i/ivmh9xj4p.css';
import '../../css/w/wgd4l8b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="mxn1xcbxn wm-shadow"/><path class="ryuwp6bae wm-shadow"/><path class="yw2kh5b8s"/><path class="ivmh9xj4p"/><path class="wgd4l8b8q"/></g>`,
		"fallback": "withicons-brutal:toolbox",
	});
}

export default Component;
