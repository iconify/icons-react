import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my8c60b4d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my8c60b4d"/>`,
		"fallback": "cib:plangrid",
	});
}

export default Component;
