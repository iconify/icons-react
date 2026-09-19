import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wng3pnz_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wng3pnz_h"/>`,
		"fallback": "feather:volume-1",
	});
}

export default Component;
