import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo50atbug.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo50atbug"/>`,
		"fallback": "energy-icons:signal-high-20-bold",
	});
}

export default Component;
