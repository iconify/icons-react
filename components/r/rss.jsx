import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du0059b8y.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du0059b8y"/>`,
		"fallback": "fa-solid:rss",
	});
}

export default Component;
