import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j73iq-qtb.css';
import '../../css/g/gfp8-7ddx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="j73iq-qtb"/><path class="gfp8-7ddx"/></g>`,
		"fallback": "withicons-bauhaus:table-of-contents",
	});
}

export default Component;
