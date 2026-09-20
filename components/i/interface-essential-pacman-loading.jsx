import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3xw2u99v.css';
import '../../css/f/fd-tsvb4b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3xw2u99v"/><path class="fd-tsvb4b"/>`,
		"fallback": "streamline-pixel:interface-essential-pacman-loading",
	});
}

export default Component;
