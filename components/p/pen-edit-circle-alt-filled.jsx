import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upc9h7bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upc9h7bfd"/>`,
		"fallback": "boxicons:pen-edit-circle-alt-filled",
	});
}

export default Component;
