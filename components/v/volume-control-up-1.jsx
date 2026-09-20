import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tq9bl8w8t.css';
import '../../css/s/st9nuweaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tq9bl8w8t"/><path class="st9nuweaz"/></g>`,
		"fallback": "streamline-freehand-color:volume-control-up-1",
	});
}

export default Component;
