import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef_uqabxy.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef_uqabxy"/>`,
		"fallback": "pullo:shield-x-light",
	});
}

export default Component;
