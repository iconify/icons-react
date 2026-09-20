import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxazcztrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxazcztrq"/>`,
		"fallback": "keyline-icons:replay",
	});
}

export default Component;
