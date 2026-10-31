import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yr269h5jp.css';
import '../../css/l/ldzi38b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yr269h5jp"/><path class="ldzi38b2u"/></g>`,
		"fallback": "coolicons:music-note-off-duotone-round",
	});
}

export default Component;
