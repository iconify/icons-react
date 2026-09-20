import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7p-x_2jp.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7p-x_2jp"/>`,
		"fallback": "maki:star-stroked-11",
	});
}

export default Component;
