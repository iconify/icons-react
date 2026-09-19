import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uozyn4b3h.css';
import '../../css/v/v5sovhbmt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="uozyn4b3h"/><path class="v5sovhbmt"/></g>`,
		"fallback": "garden:notes-stroke-16",
	});
}

export default Component;
