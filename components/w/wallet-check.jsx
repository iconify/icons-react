import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6-agqbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6-agqbwn"/>`,
		"fallback": "noviair-light:wallet-check",
	});
}

export default Component;
