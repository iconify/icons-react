import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oevc2sblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oevc2sblz"/>`,
		"fallback": "mingcute:signal-fill",
	});
}

export default Component;
