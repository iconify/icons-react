import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8pd40b5k.css';
import '../../css/y/ylglf9x3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8pd40b5k"/><path class="ylglf9x3a"/>`,
		"fallback": "streamline-freehand:video-player-smartphone-horizontal",
	});
}

export default Component;
