import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy0a09b0b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy0a09b0b"/>`,
		"fallback": "entypo:triangle-left",
	});
}

export default Component;
