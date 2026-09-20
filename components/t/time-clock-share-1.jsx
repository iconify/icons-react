import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wu-beebxi.css';
import '../../css/l/lqhb83hsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wu-beebxi"/><path class="lqhb83hsm"/></g>`,
		"fallback": "streamline-freehand:time-clock-share-1",
	});
}

export default Component;
