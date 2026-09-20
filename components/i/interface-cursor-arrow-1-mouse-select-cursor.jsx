import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y78ufbddo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y78ufbddo"/>`,
		"fallback": "streamline:interface-cursor-arrow-1-mouse-select-cursor",
	});
}

export default Component;
