import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn05zjzoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn05zjzoo"/>`,
		"fallback": "keyline-icons:shopping-bag",
	});
}

export default Component;
