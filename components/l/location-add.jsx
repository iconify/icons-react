import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wesvssbai.css';
import '../../css/w/w9bf4kb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="wesvssbai"/><path class="w9bf4kb6r"/></g>`,
		"fallback": "reicon:location-add",
	});
}

export default Component;
