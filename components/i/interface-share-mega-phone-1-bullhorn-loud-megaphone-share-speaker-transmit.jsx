import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hut9axcvl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hut9axcvl"/>`,
		"fallback": "streamline:interface-share-mega-phone-1-bullhorn-loud-megaphone-share-speaker-transmit",
	});
}

export default Component;
