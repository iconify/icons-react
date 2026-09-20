import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8x_7syhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8x_7syhc"/>`,
		"fallback": "thesvg-color:wagmi",
	});
}

export default Component;
