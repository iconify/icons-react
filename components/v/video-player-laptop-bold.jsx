import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f53is0bjt.css';
import '../../css/a/an4vz7evy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f53is0bjt"/><path class="an4vz7evy"/>`,
		"fallback": "streamline-ultimate:video-player-laptop-bold",
	});
}

export default Component;
