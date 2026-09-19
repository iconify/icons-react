import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7ve_51rh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7ve_51rh"/>`,
		"fallback": "f7:scissors-alt",
	});
}

export default Component;
