import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-tdchb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-tdchb9s"/>`,
		"fallback": "coolicons:star-off-fill-round",
	});
}

export default Component;
