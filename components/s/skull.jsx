import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c23hjf9vn.css';
import '../../css/z/z_gk1_m8o.css';
import '../../css/y/yq0t3ucke.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c23hjf9vn"/><path class="z_gk1_m8o"/><path class="yq0t3ucke"/></g>`,
		"fallback": "glyphs-poly:skull",
	});
}

export default Component;
