import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixrj4gb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ixrj4gb_y"/>`,
		"fallback": "solar:smart-speaker-minimalistic-bold",
	});
}

export default Component;
