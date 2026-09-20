import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7mxl3b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e7mxl3b-n"/>`,
		"fallback": "reicon:sale-square-filled",
	});
}

export default Component;
