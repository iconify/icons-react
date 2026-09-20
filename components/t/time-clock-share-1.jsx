import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wyoh-eqqq.css';
import '../../css/v/v2gq0cvzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wyoh-eqqq"/><path class="v2gq0cvzy"/></g>`,
		"fallback": "streamline-freehand-color:time-clock-share-1",
	});
}

export default Component;
