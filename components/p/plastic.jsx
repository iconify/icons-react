import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9fy4pb2e.css';
import '../../css/d/dgefbvkwi.css';
import '../../css/h/hyxzxriuy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="e9fy4pb2e"><path class="dgefbvkwi"/><path class="hyxzxriuy"/></g>`,
		"fallback": "material-icon-theme:plastic",
	});
}

export default Component;
