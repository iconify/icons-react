import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/artlz7bym.css';
import '../../css/c/c5y_3_b0c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="artlz7bym"/><path class="c5y_3_b0c"/>`,
		"fallback": "ooui:keyboard",
	});
}

export default Component;
