import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um-28hxyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um-28hxyc"/>`,
		"fallback": "cbi:nest-wifi-repeater",
	});
}

export default Component;
