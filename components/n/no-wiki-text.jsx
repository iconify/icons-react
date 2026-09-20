import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snoq0vy-t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snoq0vy-t"/>`,
		"fallback": "ooui:no-wiki-text",
	});
}

export default Component;
