import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8fcnxmjq.css';
import '../../css/c/cdkh7bjct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h8fcnxmjq"/><circle class="cdkh7bjct"/>`,
		"fallback": "lets-icons:map-fill",
	});
}

export default Component;
