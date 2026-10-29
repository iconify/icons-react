import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a_0c-vozs.css';
import '../../css/y/yk4wejb5r.css';
import '../../css/x/x2ocqx88i.css';
import '../../css/l/ljeitrr-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a_0c-vozs"/><path class="wm-s yk4wejb5r"/><path class="wm-s x2ocqx88i"/><path class="ljeitrr-k"/></g>`,
		"fallback": "withicons:user-star-duo",
	});
}

export default Component;
