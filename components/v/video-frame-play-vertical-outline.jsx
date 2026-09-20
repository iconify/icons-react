import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ded-w7bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ded-w7bdk"/>`,
		"fallback": "solar:video-frame-play-vertical-outline",
	});
}

export default Component;
