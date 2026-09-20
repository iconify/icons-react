import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs66k5bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs66k5bto"/>`,
		"fallback": "pixelarticons:rss-circle",
	});
}

export default Component;
