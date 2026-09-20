import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg01fo99r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg01fo99r"/>`,
		"fallback": "token:iota",
	});
}

export default Component;
