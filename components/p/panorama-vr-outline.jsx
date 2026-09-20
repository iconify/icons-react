import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no--2obox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no--2obox"/>`,
		"fallback": "mdi:panorama-vr-outline",
	});
}

export default Component;
