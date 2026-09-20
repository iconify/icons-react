import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knbra1tuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knbra1tuf"/>`,
		"fallback": "mdi:tshirt-crew-outline",
	});
}

export default Component;
