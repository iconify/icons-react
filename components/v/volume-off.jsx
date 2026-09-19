import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj9rb1bov.css';

const viewBox = {"width":768,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj9rb1bov"/>`,
		"fallback": "fa:volume-off",
	});
}

export default Component;
