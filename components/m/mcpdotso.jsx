import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/ganwjxbee.css';
import '../../css/p/pb5_n0k5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ganwjxbee"/><path class="pb5_n0k5a"/></g>`,
		"fallback": "thesvg:mcpdotso",
	});
}

export default Component;
