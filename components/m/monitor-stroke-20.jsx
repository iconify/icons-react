import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di4565bwh.css';
import '../../css/w/w5e9b3z6p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di4565bwh"/><path class="w5e9b3z6p"/>`,
		"fallback": "garden:monitor-stroke-20",
	});
}

export default Component;
