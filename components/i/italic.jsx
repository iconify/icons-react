import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub6_l5tno.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub6_l5tno"/>`,
		"fallback": "icons8:italic",
	});
}

export default Component;
