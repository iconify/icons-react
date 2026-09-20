import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2e7dzr4o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c2e7dzr4o"/>`,
		"fallback": "streamline:volume-off-remix",
	});
}

export default Component;
