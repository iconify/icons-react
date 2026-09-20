import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox7k1oi8i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox7k1oi8i"/>`,
		"fallback": "qlementine-icons:mac-fill-16",
	});
}

export default Component;
