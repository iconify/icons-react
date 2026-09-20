import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v-bm5hswa.css';
import '../../css/x/xjr5hzj1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v-bm5hswa"/><path class="xjr5hzj1l"/></g>`,
		"fallback": "streamline-freehand:keyboard-arrow-return",
	});
}

export default Component;
