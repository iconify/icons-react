import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lznpb-b-w.css';
import '../../css/w/w0poz4bns.css';
import '../../css/n/n4zx3qb1w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lznpb-b-w"/><path class="w0poz4bns"/><path class="n4zx3qb1w"/>`,
		"fallback": "energy-icons:monitor-off-20-bold",
	});
}

export default Component;
