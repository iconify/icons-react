import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3as_xbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3as_xbml"/>`,
		"fallback": "streamline-ultimate:power-outlet-type-j-bold",
	});
}

export default Component;
