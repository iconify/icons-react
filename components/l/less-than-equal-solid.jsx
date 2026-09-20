import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezp0t7b4z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezp0t7b4z"/>`,
		"fallback": "la:less-than-equal-solid",
	});
}

export default Component;
