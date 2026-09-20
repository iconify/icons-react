import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w09sanyvs.css';
import '../../css/z/zt9k5cr-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w09sanyvs"/><path class="zt9k5cr-i"/></g>`,
		"fallback": "streamline-freehand-color:shop-sign",
	});
}

export default Component;
