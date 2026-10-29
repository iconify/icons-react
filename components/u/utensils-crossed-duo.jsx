import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f_kj6eafh.css';
import '../../css/b/b5jgdnp5j.css';
import '../../css/t/t8rq8gxbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f_kj6eafh wm-a"/><path class="b5jgdnp5j"/><path class="t8rq8gxbc wm-a"/></g>`,
		"fallback": "withicons:utensils-crossed-duo",
	});
}

export default Component;
