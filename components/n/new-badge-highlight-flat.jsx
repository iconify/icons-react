import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymqkc5bcd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ymqkc5bcd"/>`,
		"fallback": "streamline-flex-color:new-badge-highlight-flat",
	});
}

export default Component;
