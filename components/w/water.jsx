import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8rjzwzya.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8rjzwzya"/>`,
		"fallback": "entypo:water",
	});
}

export default Component;
