import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/q/qkfiy8b3d.css';
import '../../css/n/ni8n24f5q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="qkfiy8b3d"/><path class="ni8n24f5q"/></g>`,
		"fallback": "glyphs:shovel-bold",
	});
}

export default Component;
