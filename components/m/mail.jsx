import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd1_v8oue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd1_v8oue"/>`,
		"fallback": "ci:mail",
	});
}

export default Component;
