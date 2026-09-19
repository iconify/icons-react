import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeh33x6-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeh33x6-i"/>`,
		"fallback": "iconoir:maximize",
	});
}

export default Component;
