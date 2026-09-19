import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x36pa5t6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x36pa5t6m"/>`,
		"fallback": "griddy-icons:plug",
	});
}

export default Component;
