import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsgg_6xrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsgg_6xrd"/>`,
		"fallback": "mdi:margin",
	});
}

export default Component;
