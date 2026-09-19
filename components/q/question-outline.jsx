import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fp5faybfm.css';
import '../../css/m/mtnazjbmz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fp5faybfm"/><path class="mtnazjbmz"/></g>`,
		"fallback": "glyphs:question-outline",
	});
}

export default Component;
