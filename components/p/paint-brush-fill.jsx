import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygfcqccex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygfcqccex"/>`,
		"fallback": "ri:paint-brush-fill",
	});
}

export default Component;
