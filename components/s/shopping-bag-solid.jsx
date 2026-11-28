import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhj9y3icm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhj9y3icm"/>`,
		"fallback": "iconaut:shopping-bag-solid",
	});
}

export default Component;
