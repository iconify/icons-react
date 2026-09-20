import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru5ry8blp.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru5ry8blp"/>`,
		"fallback": "oi:justify-right",
	});
}

export default Component;
