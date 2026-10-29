import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fztg3rpub.css';
import '../../css/w/wbflqbbgm.css';
import '../../css/s/s-f6soaux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fztg3rpub"/><path class="wbflqbbgm"/><path class="s-f6soaux"/></g>`,
		"fallback": "withicons-bauhaus:lollipop",
	});
}

export default Component;
