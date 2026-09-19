import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2w58mbuu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2w58mbuu"/>`,
		"fallback": "file-icons:kibo",
	});
}

export default Component;
