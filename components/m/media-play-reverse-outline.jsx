import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue9mixg-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue9mixg-l"/>`,
		"fallback": "typcn:media-play-reverse-outline",
	});
}

export default Component;
