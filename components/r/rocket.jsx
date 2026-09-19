import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw3sszbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw3sszbcf"/>`,
		"fallback": "bxs:rocket",
	});
}

export default Component;
