import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1c0n5wpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1c0n5wpc"/>`,
		"fallback": "bx:search-alt-2",
	});
}

export default Component;
