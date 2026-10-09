import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7588rxqu.css';
import '../../css/w/w97g-pbda.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7588rxqu"/><path class="w97g-pbda"/>`,
		"fallback": "energy-icons:microgrid-20-bold",
	});
}

export default Component;
