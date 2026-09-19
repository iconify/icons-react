import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njrtzgfnc.css';
import '../../css/s/slwp9yb5h.css';
import '../../css/k/klebjebfq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="njrtzgfnc"/><circle class="slwp9yb5h"/><circle class="klebjebfq"/></g>`,
		"fallback": "garden:overflow-fill-12",
	});
}

export default Component;
