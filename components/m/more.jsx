import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2x231juw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2x231juw"/>`,
		"fallback": "reicon:more",
	});
}

export default Component;
