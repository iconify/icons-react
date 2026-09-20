import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc910e6zh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc910e6zh"/>`,
		"fallback": "streamline:interface-folder-empty-folder",
	});
}

export default Component;
