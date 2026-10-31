import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jgqgrn5ry.css';
import '../../css/y/yoypybcrx.css';
import '../../css/x/xnodzworh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jgqgrn5ry wm-k"/><path class="wm-a yoypybcrx"/><path class="wm-s xnodzworh"/></g>`,
		"fallback": "withicons:microphone-off-gloss",
	});
}

export default Component;
