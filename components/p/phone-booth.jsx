import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h2i4iib3s.css';
import '../../css/w/wdfe82b4z.css';
import '../../css/s/sz507lblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h2i4iib3s"/><path class="wdfe82b4z"/><path class="sz507lblu"/></g>`,
		"fallback": "streamline-freehand-color:phone-booth",
	});
}

export default Component;
