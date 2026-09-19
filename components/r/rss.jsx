import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3x82etzf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3x82etzf"/>`,
		"fallback": "fa6-solid:rss",
	});
}

export default Component;
