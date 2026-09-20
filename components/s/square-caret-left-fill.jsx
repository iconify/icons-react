import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9yjv5bdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q9yjv5bdn"/>`,
		"fallback": "keyline-icons:square-caret-left-fill",
	});
}

export default Component;
