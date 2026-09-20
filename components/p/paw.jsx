import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yahi2b22z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yahi2b22z"/>`,
		"fallback": "reicon:paw",
	});
}

export default Component;
