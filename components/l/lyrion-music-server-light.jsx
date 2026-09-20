import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr08qbjbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr08qbjbo"/>`,
		"fallback": "selfhst:lyrion-music-server-light",
	});
}

export default Component;
