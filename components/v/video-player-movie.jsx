import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nsqzqfnmz.css';
import '../../css/r/razn-p2jy.css';
import '../../css/c/cxfhr6p-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nsqzqfnmz"/><path class="razn-p2jy"/><path class="cxfhr6p-v"/></g>`,
		"fallback": "streamline-freehand:video-player-movie",
	});
}

export default Component;
