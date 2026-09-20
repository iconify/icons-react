import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w7poixe4p.css';
import '../../css/x/xjt4mmbhg.css';
import '../../css/y/ypms94bds.css';
import '../../css/h/hwt9rfbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w7poixe4p"/><path class="xjt4mmbhg"/><path class="ypms94bds"/><path class="hwt9rfbqp"/></g>`,
		"fallback": "streamline-freehand-color:shopping-basket-arrow-out",
	});
}

export default Component;
