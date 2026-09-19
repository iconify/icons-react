import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/ymh-28bff.css';
import '../../css/l/llb9lac0q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="ymh-28bff"/><path class="llb9lac0q"/></g>`,
		"fallback": "garden:monitor-stroke-12",
	});
}

export default Component;
