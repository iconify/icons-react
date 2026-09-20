import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydmna9bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ydmna9bxn"/>`,
		"fallback": "qlementine-icons:items-grid-24",
	});
}

export default Component;
