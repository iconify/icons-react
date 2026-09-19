import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnau-sb5b.css';
import '../../css/h/h63us4zvz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vnau-sb5b"/><path class="h63us4zvz"/></g>`,
		"fallback": "at-icons:sailboat",
	});
}

export default Component;
