import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n15dnrbqy.css';
import '../../css/c/c51nsnbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n15dnrbqy"/><path class="c51nsnbtl"/></g>`,
		"fallback": "streamline-freehand-color:read-email-target",
	});
}

export default Component;
