import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hghykk9oe.css';

const viewBox = {"width":1472,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hghykk9oe"/>`,
		"fallback": "fa:sort-numeric-desc",
	});
}

export default Component;
