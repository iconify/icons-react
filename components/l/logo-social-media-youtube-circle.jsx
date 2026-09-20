import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9y4dyb1x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9y4dyb1x"/>`,
		"fallback": "streamline-pixel:logo-social-media-youtube-circle",
	});
}

export default Component;
