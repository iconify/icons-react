import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tghj5bcrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tghj5bcrc"/>`,
		"fallback": "withicons:shirt-gloss",
	});
}

export default Component;
