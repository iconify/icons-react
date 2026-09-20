import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmmar6b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmmar6b6n"/>`,
		"fallback": "streamline-ultimate:video-player-album-bold",
	});
}

export default Component;
