import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy0qri4ae.css';
import '../../css/p/p__g4pb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy0qri4ae"/><path class="p__g4pb1v"/>`,
		"fallback": "circum:save-up-2",
	});
}

export default Component;
