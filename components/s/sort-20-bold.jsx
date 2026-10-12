import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqm6o8bjf.css';
import '../../css/r/rtz_uvbkq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqm6o8bjf"/><path class="rtz_uvbkq"/>`,
		"fallback": "energy-icons:sort-20-bold",
	});
}

export default Component;
