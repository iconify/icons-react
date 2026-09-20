import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eul60_acn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eul60_acn"/>`,
		"fallback": "streamline-ultimate:modern-music-electric-guitar-bold",
	});
}

export default Component;
