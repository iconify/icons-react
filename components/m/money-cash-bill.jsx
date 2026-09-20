import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vchse2bmr.css';
import '../../css/n/n7oztbbat.css';
import '../../css/e/ebzbuu97s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vchse2bmr"/><path class="n7oztbbat"/><path class="ebzbuu97s"/></g>`,
		"fallback": "streamline-freehand-color:money-cash-bill",
	});
}

export default Component;
