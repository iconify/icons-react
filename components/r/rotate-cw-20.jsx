import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht0kv9akh.css';
import '../../css/x/xl70_ubev.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht0kv9akh"/><path class="xl70_ubev"/>`,
		"fallback": "energy-icons:rotate-cw-20",
	});
}

export default Component;
