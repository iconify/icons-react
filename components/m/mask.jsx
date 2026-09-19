import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk60czbbc.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk60czbbc"/>`,
		"fallback": "fa-solid:mask",
	});
}

export default Component;
