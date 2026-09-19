import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjkzw0bkd.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjkzw0bkd"/>`,
		"fallback": "fontisto:shopping-basket-add",
	});
}

export default Component;
