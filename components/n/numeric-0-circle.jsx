import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtxonkbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtxonkbrd"/>`,
		"fallback": "mdi:numeric-0-circle",
	});
}

export default Component;
