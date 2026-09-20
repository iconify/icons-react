import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n07bwsk6l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n07bwsk6l"/>`,
		"fallback": "streamline-pixel:interface-essential-pencil-edit-2",
	});
}

export default Component;
