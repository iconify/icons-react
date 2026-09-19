import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4iq4dbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4iq4dbav"/>`,
		"fallback": "cbi:play-washer",
	});
}

export default Component;
