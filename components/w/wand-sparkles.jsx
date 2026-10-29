import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/ps8zu7-6l.css';
import '../../css/n/ncf12tbyq.css';
import '../../css/n/n-tuk7beb.css';
import '../../css/w/wht-6mbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ps8zu7-6l wm-k"/><path class="ncf12tbyq wm-a"/><path class="n-tuk7beb"/><path class="wht-6mbhg"/></g>`,
		"fallback": "withicons-bauhaus:wand-sparkles",
	});
}

export default Component;
