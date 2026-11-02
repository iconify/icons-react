import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dir-0qbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dir-0qbkv"/>`,
		"fallback": "mingcute:safe-box-fill",
	});
}

export default Component;
