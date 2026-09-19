import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucu8i8bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucu8i8bat"/>`,
		"fallback": "boxicons:water-filled",
	});
}

export default Component;
