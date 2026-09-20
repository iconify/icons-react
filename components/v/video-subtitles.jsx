import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk6fb0u6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk6fb0u6b"/>`,
		"fallback": "streamline-sharp:video-subtitles",
	});
}

export default Component;
