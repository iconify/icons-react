import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcjpixbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcjpixbyr"/>`,
		"fallback": "coolicons:map-pin-heart-fill-round",
	});
}

export default Component;
