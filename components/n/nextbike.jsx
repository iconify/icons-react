import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh4kgmb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh4kgmb9u"/>`,
		"fallback": "thesvg-color:nextbike",
	});
}

export default Component;
