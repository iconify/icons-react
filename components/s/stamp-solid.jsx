import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyeg-yb4x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyeg-yb4x"/>`,
		"fallback": "la:stamp-solid",
	});
}

export default Component;
