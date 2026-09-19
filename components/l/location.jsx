import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry3so7gim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry3so7gim"/>`,
		"fallback": "iconamoon:location",
	});
}

export default Component;
