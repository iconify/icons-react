import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mgadqbaed.css';
import '../../css/y/yc4w11sjy.css';
import '../../css/m/mlbw-2baf.css';
import '../../css/n/n4aam7bgp.css';
import '../../css/a/a1n0b8upn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mgadqbaed wm-k"/><path class="wm-k yc4w11sjy"/><path class="mlbw-2baf"/><path class="n4aam7bgp"/><path class="a1n0b8upn wm-s"/></g>`,
		"fallback": "withicons-bauhaus:oven",
	});
}

export default Component;
