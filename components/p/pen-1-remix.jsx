import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3j5t0b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m3j5t0b4o"/>`,
		"fallback": "streamline-sharp:pen-1-remix",
	});
}

export default Component;
