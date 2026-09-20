import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g6v_oo5fi.css';
import '../../css/b/bot0f1i1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g6v_oo5fi"/><path class="bot0f1i1g"/></g>`,
		"fallback": "streamline-freehand-color:shopping-cart-trolley",
	});
}

export default Component;
