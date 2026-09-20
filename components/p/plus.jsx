import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbw5l6n7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbw5l6n7c"/>`,
		"fallback": "raphael:plus",
	});
}

export default Component;
