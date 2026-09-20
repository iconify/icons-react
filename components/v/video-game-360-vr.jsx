import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdfl0cm_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qdfl0cm_e"/>`,
		"fallback": "streamline-freehand:video-game-360-vr",
	});
}

export default Component;
