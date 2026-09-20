import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfvu3vb8e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vfvu3vb8e"/>`,
		"fallback": "streamline:polaroid-four-remix",
	});
}

export default Component;
