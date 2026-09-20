import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zsaogxeit.css';
import '../../css/i/i9_-rac5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zsaogxeit"/><path class="i9_-rac5d"/></g>`,
		"fallback": "streamline-freehand:time-wrist-watch-1",
	});
}

export default Component;
