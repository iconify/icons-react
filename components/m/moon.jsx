import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugv8xmbky.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugv8xmbky"/>`,
		"fallback": "heroicons-solid:moon",
	});
}

export default Component;
