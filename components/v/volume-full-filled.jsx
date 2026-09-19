import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yenvhub-v.css';
import '../../css/f/ft3afwb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yenvhub-v"/><path class="ft3afwb6q"/>`,
		"fallback": "boxicons:volume-full-filled",
	});
}

export default Component;
