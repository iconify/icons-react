import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap1_i8bof.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap1_i8bof"/>`,
		"fallback": "pullo:shield-user-thin",
	});
}

export default Component;
