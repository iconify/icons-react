import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5_b1pbdm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5_b1pbdm"/>`,
		"fallback": "carbon:pentagon-solid",
	});
}

export default Component;
