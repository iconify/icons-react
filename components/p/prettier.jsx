import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmuf8cooy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmuf8cooy"/>`,
		"fallback": "cib:prettier",
	});
}

export default Component;
