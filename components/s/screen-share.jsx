import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ar12u5ppj.css';
import '../../css/q/q6lk0mb6n.css';
import '../../css/u/u6lcmebpx.css';
import '../../css/e/earovrbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ar12u5ppj wm-k"/><path class="q6lk0mb6n"/><path class="u6lcmebpx"/><path class="earovrbkh wm-s"/></g>`,
		"fallback": "withicons-bauhaus:screen-share",
	});
}

export default Component;
