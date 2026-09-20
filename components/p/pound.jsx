import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3qn_6bzo.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3qn_6bzo"/>`,
		"fallback": "lineicons:pound",
	});
}

export default Component;
