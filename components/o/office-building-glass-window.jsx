import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y4-0wdf4q.css';
import '../../css/o/okeaflbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y4-0wdf4q"/><path class="okeaflbtu"/></g>`,
		"fallback": "streamline-freehand:office-building-glass-window",
	});
}

export default Component;
