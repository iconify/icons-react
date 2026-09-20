import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uky8qyb0d.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uky8qyb0d"/>`,
		"fallback": "picon:router",
	});
}

export default Component;
