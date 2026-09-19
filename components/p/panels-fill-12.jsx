import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7_i8lbld.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7_i8lbld"/>`,
		"fallback": "garden:panels-fill-12",
	});
}

export default Component;
