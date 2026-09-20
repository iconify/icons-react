import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drz4_tb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drz4_tb0a"/>`,
		"fallback": "mdi:refrigerator-outline",
	});
}

export default Component;
