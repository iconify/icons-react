import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paqsr5_ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paqsr5_ph"/>`,
		"fallback": "streamline-ultimate:video-player-slider-bold",
	});
}

export default Component;
