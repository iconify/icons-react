import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_7gkfb7w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_7gkfb7w"/>`,
		"fallback": "la:list-ol-solid",
	});
}

export default Component;
