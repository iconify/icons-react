import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zb0q9-bfp.css';
import '../../css/o/ol5nzqv4x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="zb0q9-bfp"/><path class="ol5nzqv4x"/></g>`,
		"fallback": "garden:user-list-stroke-12",
	});
}

export default Component;
