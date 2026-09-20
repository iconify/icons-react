import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or70u-m3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or70u-m3c"/>`,
		"fallback": "mynaui:letter-e-hexagon-solid",
	});
}

export default Component;
