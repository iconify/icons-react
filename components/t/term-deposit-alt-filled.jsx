import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apf4k87rl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="apf4k87rl"/>`,
		"fallback": "griddy-icons:term-deposit-alt-filled",
	});
}

export default Component;
