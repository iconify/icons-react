import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjk-yt08k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjk-yt08k"/>`,
		"fallback": "streamline-ultimate:radio-retro-bold",
	});
}

export default Component;
