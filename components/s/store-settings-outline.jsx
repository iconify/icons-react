import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdftnwb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdftnwb6g"/>`,
		"fallback": "mdi:store-settings-outline",
	});
}

export default Component;
