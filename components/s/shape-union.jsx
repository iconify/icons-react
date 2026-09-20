import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk58k2bhu.css';
import '../../css/d/dlev4xbhi.css';
import '../../css/c/cq3__acdk.css';
import '../../css/q/qao85dy3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk58k2bhu"/><path class="dlev4xbhi"/><path class="cq3__acdk"/><path class="qao85dy3z"/></g>`,
		"fallback": "proicons:shape-union",
	});
}

export default Component;
