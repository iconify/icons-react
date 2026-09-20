import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7mj2-27h.css';
import '../../css/u/uyenbzb3g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k7mj2-27h"/><path class="uyenbzb3g"/></g>`,
		"fallback": "streamline-flex-color:shield-1",
	});
}

export default Component;
