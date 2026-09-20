import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s00ripn2b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s00ripn2b"/>`,
		"fallback": "streamline:one-finger-drag-horizontal",
	});
}

export default Component;
