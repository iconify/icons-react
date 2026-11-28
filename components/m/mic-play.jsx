import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl1w0n5jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl1w0n5jy"/>`,
		"fallback": "noviair-light:mic-play",
	});
}

export default Component;
