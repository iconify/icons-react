import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqvgq0beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqvgq0beg"/>`,
		"fallback": "lucide:list-collapse",
	});
}

export default Component;
