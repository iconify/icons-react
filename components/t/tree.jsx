import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy_3j5b9b.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy_3j5b9b"/>`,
		"fallback": "fa-solid:tree",
	});
}

export default Component;
