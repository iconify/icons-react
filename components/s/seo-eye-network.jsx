import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bkvlyfb2z.css';
import '../../css/d/dc64p916k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bkvlyfb2z"/><path class="dc64p916k"/></g>`,
		"fallback": "streamline-freehand-color:seo-eye-network",
	});
}

export default Component;
