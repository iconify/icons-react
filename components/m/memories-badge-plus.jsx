import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3akslctm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3akslctm"/>`,
		"fallback": "f7:memories-badge-plus",
	});
}

export default Component;
