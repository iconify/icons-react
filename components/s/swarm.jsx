import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jnhvvkb6f.css';
import '../../css/s/s7h-pwb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jnhvvkb6f"/><path class="s7h-pwb7y"/></g>`,
		"fallback": "hugeicons:swarm",
	});
}

export default Component;
