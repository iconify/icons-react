import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v1nch-bjw.css';
import '../../css/n/n6zpo5byc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v1nch-bjw"/><path class="n6zpo5byc"/></g>`,
		"fallback": "streamline-freehand-color:microphone-off",
	});
}

export default Component;
