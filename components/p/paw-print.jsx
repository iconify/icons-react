import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/deqj57blt.css';
import '../../css/g/gl55ebced.css';
import '../../css/n/nfb4d9bdw.css';
import '../../css/a/a8qjxac2f.css';
import '../../css/d/d51br0pza.css';
import '../../css/f/fqqm5fk1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="deqj57blt wm-shadow"/><path class="gl55ebced"/><path class="nfb4d9bdw"/><path class="a8qjxac2f"/><path class="d51br0pza"/><path class="fqqm5fk1r"/></g>`,
		"fallback": "withicons-retro:paw-print",
	});
}

export default Component;
