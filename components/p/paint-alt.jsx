import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf6rg8q0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf6rg8q0t"/>`,
		"fallback": "boxicons:paint-alt",
	});
}

export default Component;
