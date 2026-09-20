import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmajn5bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmajn5bst"/>`,
		"fallback": "mdi:skate",
	});
}

export default Component;
