import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yr4w7qoxc.css';
import '../../css/k/kc8m1-0lc.css';
import '../../css/f/fl5zcabaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yr4w7qoxc"/><path class="kc8m1-0lc"/><path class="fl5zcabaw"/></g>`,
		"fallback": "streamline-freehand:server-2",
	});
}

export default Component;
