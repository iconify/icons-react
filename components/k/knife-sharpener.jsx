import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgqeop3xu.css';
import '../../css/n/n_t_j9knb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pgqeop3xu"/><path class="n_t_j9knb"/></g>`,
		"fallback": "griddy-icons:knife-sharpener",
	});
}

export default Component;
