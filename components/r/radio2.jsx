import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utzv-rz6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="utzv-rz6q"/>`,
		"fallback": "reicon:radio2",
	});
}

export default Component;
