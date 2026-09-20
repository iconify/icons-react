import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm7fs1b4b.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm7fs1b4b"/>`,
		"fallback": "picon:twitch",
	});
}

export default Component;
