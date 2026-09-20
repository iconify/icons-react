import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4_kai7yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c4_kai7yu"/>`,
		"fallback": "reicon:stopwatch-filled",
	});
}

export default Component;
