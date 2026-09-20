import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/h4-i6mr6q.css';
import '../../css/w/wcsmwccul.css';
import '../../css/h/hz1ydac1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="h4-i6mr6q"/><path class="wcsmwccul"/><path class="hz1ydac1u"/></g>`,
		"fallback": "streamline-sharp-color:trophy",
	});
}

export default Component;
