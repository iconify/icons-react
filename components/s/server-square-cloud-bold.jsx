import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kp0966g8u.css';
import '../../css/y/yp99_4-7f.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hm_cqf57b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kp0966g8u"/><path clip-rule="evenodd" class="yp99_4-7f"/><use href="#SVGYINKAe9m" class="cuyn6tgcc"/><use href="#SVGYINKAe9m" class="cuyn6tgcc"/><defs><path id="SVGYINKAe9m" clip-rule="evenodd" class="hm_cqf57b"/></defs></g>`,
		"fallback": "solar:server-square-cloud-bold",
	});
}

export default Component;
