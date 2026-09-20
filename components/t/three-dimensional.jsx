import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6tse1upv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6tse1upv"/>`,
		"fallback": "ooui:three-dimensional",
	});
}

export default Component;
