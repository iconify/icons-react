import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t968qeb0g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t968qeb0g"/>`,
		"fallback": "la:joomla",
	});
}

export default Component;
