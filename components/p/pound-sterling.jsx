import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e72dt9b3l.css';
import '../../css/u/usfbnfoug.css';
import '../../css/l/l9bado51g.css';
import '../../css/y/yi8-9edyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e72dt9b3l wm-k"/><path class="usfbnfoug wm-deco"/><path class="l9bado51g wm-k"/><path class="wm-shadow yi8-9edyr"/></g>`,
		"fallback": "withicons-valentine:pound-sterling",
	});
}

export default Component;
