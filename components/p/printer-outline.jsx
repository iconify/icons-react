import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br6gkkbnm.css';
import '../../css/y/y8r8-nbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br6gkkbnm"/><path clip-rule="evenodd" class="y8r8-nbhy"/>`,
		"fallback": "basil:printer-outline",
	});
}

export default Component;
