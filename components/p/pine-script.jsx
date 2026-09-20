import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihajhob6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihajhob6v"/>`,
		"fallback": "thesvg:pine-script",
	});
}

export default Component;
