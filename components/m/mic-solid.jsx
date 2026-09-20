import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz75m85jy.css';
import '../../css/i/ipvgj6bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz75m85jy"/><path class="ipvgj6bpp"/>`,
		"fallback": "stash:mic-solid",
	});
}

export default Component;
