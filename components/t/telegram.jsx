import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od14k4bxt.css';
import '../../css/n/n-o4sdbun.css';
import '../../css/v/vmk-enbfe.css';
import '../../css/u/u7n5g9--x.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG6DaOZcwt" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" class="od14k4bxt"/><stop offset="100%" class="n-o4sdbun"/></linearGradient></defs><path fill="url(#SVG6DaOZcwt)" class="vmk-enbfe"/><path class="u7n5g9--x"/>`,
		"fallback": "thesvg-color:telegram",
	});
}

export default Component;
