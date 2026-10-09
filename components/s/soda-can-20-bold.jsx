import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv6l1kbkq.css';
import '../../css/z/znf0au9uo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv6l1kbkq"/><path class="znf0au9uo"/>`,
		"fallback": "energy-icons:soda-can-20-bold",
	});
}

export default Component;
