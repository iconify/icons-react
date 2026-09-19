import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6h5rcbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6h5rcbkf"/>`,
		"fallback": "humbleicons:music-note",
	});
}

export default Component;
