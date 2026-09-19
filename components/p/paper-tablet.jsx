import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7haebbsh.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7haebbsh"/>`,
		"fallback": "ps:paper-tablet",
	});
}

export default Component;
