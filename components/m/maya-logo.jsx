import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/c/c55xrgbvk.css';
import '../../css/c/c4ux4lfrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="c55xrgbvk"/><path class="c4ux4lfrn"/></g>`,
		"fallback": "streamline-logos:maya-logo",
	});
}

export default Component;
