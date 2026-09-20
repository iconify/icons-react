import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw8pzqbtj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw8pzqbtj"/>`,
		"fallback": "ooui:logo-wikivoyage",
	});
}

export default Component;
