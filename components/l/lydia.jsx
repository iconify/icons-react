import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-ch7sbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-ch7sbxy"/>`,
		"fallback": "thesvg-color:lydia",
	});
}

export default Component;
