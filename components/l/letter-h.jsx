import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfxsk6b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfxsk6b0r"/>`,
		"fallback": "pixelarticons:letter-h",
	});
}

export default Component;
