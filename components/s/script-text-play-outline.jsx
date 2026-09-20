import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8wwx640s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8wwx640s"/>`,
		"fallback": "mdi:script-text-play-outline",
	});
}

export default Component;
