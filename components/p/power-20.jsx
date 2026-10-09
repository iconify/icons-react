import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy6gx925n.css';
import '../../css/m/mralpzb0a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy6gx925n"/><path class="mralpzb0a"/>`,
		"fallback": "energy-icons:power-20",
	});
}

export default Component;
