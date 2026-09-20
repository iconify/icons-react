import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udb8obbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="udb8obbof"/>`,
		"fallback": "solar:text-bold-bold",
	});
}

export default Component;
