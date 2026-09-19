import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0ii90bga.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0ii90bga"/>`,
		"fallback": "entypo:light-down",
	});
}

export default Component;
