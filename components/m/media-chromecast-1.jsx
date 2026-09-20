import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oo7yluxdr.css';
import '../../css/a/aea4p3b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oo7yluxdr"/><path class="aea4p3b1s"/></g>`,
		"fallback": "nrk:media-chromecast-1",
	});
}

export default Component;
