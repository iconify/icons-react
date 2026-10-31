import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zf1h4t7me.css';
import '../../css/v/v28opjc8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k zf1h4t7me"/><path class="v28opjc8q wm-s"/></g>`,
		"fallback": "withicons:plug-zap-gloss",
	});
}

export default Component;
