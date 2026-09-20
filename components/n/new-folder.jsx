import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0tui7bnb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0tui7bnb"/>`,
		"fallback": "streamline:new-folder",
	});
}

export default Component;
