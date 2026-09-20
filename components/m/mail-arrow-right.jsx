import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woa1r2bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woa1r2bdr"/>`,
		"fallback": "pixelarticons:mail-arrow-right",
	});
}

export default Component;
