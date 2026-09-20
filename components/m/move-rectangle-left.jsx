import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cqtuwm9ht.css';
import '../../css/h/hq_x3gb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cqtuwm9ht"/><path class="hq_x3gb9p"/></g>`,
		"fallback": "streamline-freehand:move-rectangle-left",
	});
}

export default Component;
