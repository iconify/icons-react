import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfhv29b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfhv29b4k"/>`,
		"fallback": "noviair-light:snowman",
	});
}

export default Component;
