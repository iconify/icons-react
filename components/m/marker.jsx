import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odpp73b1k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odpp73b1k"/>`,
		"fallback": "dashicons:marker",
	});
}

export default Component;
