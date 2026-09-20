import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_5nxcc1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_5nxcc1z"/>`,
		"fallback": "thesvg-color:removedotbg",
	});
}

export default Component;
