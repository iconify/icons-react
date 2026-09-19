import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsv3bub_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsv3bub_w"/>`,
		"fallback": "cbi:shutter-80",
	});
}

export default Component;
