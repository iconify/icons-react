import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpy9_6bht.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cpy9_6bht"/>`,
		"fallback": "streamline:recording-tape-bubble-square-remix",
	});
}

export default Component;
