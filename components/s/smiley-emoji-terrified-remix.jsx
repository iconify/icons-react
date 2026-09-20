import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp4sxebmi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fp4sxebmi"/>`,
		"fallback": "streamline:smiley-emoji-terrified-remix",
	});
}

export default Component;
