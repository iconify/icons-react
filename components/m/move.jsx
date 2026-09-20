import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khn9nwoel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khn9nwoel"/>`,
		"fallback": "keyline-icons:move",
	});
}

export default Component;
