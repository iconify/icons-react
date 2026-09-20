import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-x3u3ltf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-x3u3ltf"/>`,
		"fallback": "keyline-icons:map-pin-heart-sharp",
	});
}

export default Component;
