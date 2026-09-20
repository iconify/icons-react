import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hqucknv-v.css';
import '../../css/e/eksh7m4sv.css';
import '../../css/y/y3rbx0boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hqucknv-v"/><path class="eksh7m4sv"/><path class="y3rbx0boc"/></g>`,
		"fallback": "streamline-freehand:resize-expand-arrow",
	});
}

export default Component;
