import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewqmb9jcq.css';
import '../../css/g/gykt9mb8o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewqmb9jcq"/><path class="gykt9mb8o"/>`,
		"fallback": "energy-icons:rotor-20-bold",
	});
}

export default Component;
