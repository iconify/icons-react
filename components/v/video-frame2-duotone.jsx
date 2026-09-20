import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spo7ndbzg.css';
import '../../css/x/x_5vrebth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="spo7ndbzg"/><path class="x_5vrebth"/></g>`,
		"fallback": "reicon:video-frame2-duotone",
	});
}

export default Component;
