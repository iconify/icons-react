import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb3t2lvkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb3t2lvkc"/>`,
		"fallback": "noviair-light:music-play",
	});
}

export default Component;
