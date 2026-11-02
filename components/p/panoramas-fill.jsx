import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2g5psuob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2g5psuob"/>`,
		"fallback": "mingcute:panoramas-fill",
	});
}

export default Component;
