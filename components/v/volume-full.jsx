import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n30xjkbmn.css';
import '../../css/f/ft3afwb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n30xjkbmn"/><path class="ft3afwb6q"/>`,
		"fallback": "boxicons:volume-full",
	});
}

export default Component;
