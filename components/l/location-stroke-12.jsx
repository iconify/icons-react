import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a7h6h23cz.css';
import '../../css/d/djetgxbip.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="a7h6h23cz"/><path class="djetgxbip"/></g>`,
		"fallback": "garden:location-stroke-12",
	});
}

export default Component;
