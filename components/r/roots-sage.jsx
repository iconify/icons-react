import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qorkjt7op.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qorkjt7op"/>`,
		"fallback": "thesvg-color:roots-sage",
	});
}

export default Component;
