import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozhku5idx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozhku5idx"/>`,
		"fallback": "iconoir:shopping-bag",
	});
}

export default Component;
