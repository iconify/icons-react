import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkx3xqbus.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkx3xqbus"/>`,
		"fallback": "energy-icons:legend-20",
	});
}

export default Component;
