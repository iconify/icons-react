import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av5bkeb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av5bkeb3q"/>`,
		"fallback": "hugeicons:text-align-justify",
	});
}

export default Component;
