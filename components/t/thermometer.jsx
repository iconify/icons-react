import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh3k1sbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh3k1sbwv"/>`,
		"fallback": "mdi:thermometer",
	});
}

export default Component;
