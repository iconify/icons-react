import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9sk6wbsc.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9sk6wbsc"/>`,
		"fallback": "system-uicons:push-down",
	});
}

export default Component;
