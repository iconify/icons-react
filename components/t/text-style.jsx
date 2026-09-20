import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_h9k21pk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_h9k21pk"/>`,
		"fallback": "ooui:text-style",
	});
}

export default Component;
