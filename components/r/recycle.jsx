import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bi1v6bb7h.css';
import '../../css/r/rt2nribcm.css';
import '../../css/k/klvcus7uw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bi1v6bb7h"/><path class="rt2nribcm"/><path class="klvcus7uw"/></g>`,
		"fallback": "withicons-bauhaus:recycle",
	});
}

export default Component;
