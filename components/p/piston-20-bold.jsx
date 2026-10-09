import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl4iqhb4q.css';
import '../../css/q/qc3m2d20m.css';
import '../../css/a/azoccq8xh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl4iqhb4q"/><path class="qc3m2d20m"/><path class="azoccq8xh"/>`,
		"fallback": "energy-icons:piston-20-bold",
	});
}

export default Component;
