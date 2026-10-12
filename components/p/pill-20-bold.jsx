import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j66ia2m5n.css';
import '../../css/u/uuavj04rq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j66ia2m5n"/><path class="uuavj04rq"/>`,
		"fallback": "energy-icons:pill-20-bold",
	});
}

export default Component;
