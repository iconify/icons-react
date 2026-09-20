import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jihn21i9a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jihn21i9a"/>`,
		"fallback": "oi:vertical-align-top",
	});
}

export default Component;
