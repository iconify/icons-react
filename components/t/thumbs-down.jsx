import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5qfizb8b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5qfizb8b"/>`,
		"fallback": "entypo:thumbs-down",
	});
}

export default Component;
