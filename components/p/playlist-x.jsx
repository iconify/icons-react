import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2hkb1fev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2hkb1fev"/>`,
		"fallback": "noviair-light:playlist-x",
	});
}

export default Component;
