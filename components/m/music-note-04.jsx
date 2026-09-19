import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1c0irbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1c0irbuv"/>`,
		"fallback": "hugeicons:music-note-04",
	});
}

export default Component;
