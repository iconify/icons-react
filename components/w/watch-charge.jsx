import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_op9ivop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h_op9ivop"/>`,
		"fallback": "reicon:watch-charge",
	});
}

export default Component;
