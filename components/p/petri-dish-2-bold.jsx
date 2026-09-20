import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh5vc8h5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mh5vc8h5n"/>`,
		"fallback": "streamline-ultimate:petri-dish-2-bold",
	});
}

export default Component;
