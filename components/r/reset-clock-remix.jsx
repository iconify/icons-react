import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l03h0hbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l03h0hbog"/>`,
		"fallback": "streamline-sharp:reset-clock-remix",
	});
}

export default Component;
