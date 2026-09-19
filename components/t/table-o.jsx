import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi682gbey.css';

const viewBox = {"width":1664,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi682gbey"/>`,
		"fallback": "vs:table-o",
	});
}

export default Component;
