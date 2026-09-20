import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m7jidabhn.css';
import '../../css/k/k7ytdwb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m7jidabhn"/><path class="k7ytdwb6n"/></g>`,
		"fallback": "keyline-icons:strikethrough-duotone",
	});
}

export default Component;
