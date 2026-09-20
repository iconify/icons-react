import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2ni_pbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2ni_pbda"/>`,
		"fallback": "si:play-rewind-line",
	});
}

export default Component;
