import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt4qth8mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt4qth8mx"/>`,
		"fallback": "griddy-icons:shopping-bag-minus-filled",
	});
}

export default Component;
