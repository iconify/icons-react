import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4_mopsql.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4_mopsql"/>`,
		"fallback": "fa6-solid:square-virus",
	});
}

export default Component;
