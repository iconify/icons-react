import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7u_32bvh.css';
import '../../css/x/x39yvob4g.css';
import '../../css/l/l105bfj4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGr77DHd6N" class="e7u_32bvh"/></defs><use href="#SVGr77DHd6N" class="x39yvob4g"/><use href="#SVGr77DHd6N" class="x39yvob4g"/><path class="l105bfj4y"/>`,
		"fallback": "lets-icons:send-duotone",
	});
}

export default Component;
