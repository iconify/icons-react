import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjtn95y0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjtn95y0n"/>`,
		"fallback": "solar:music-note-3-bold",
	});
}

export default Component;
