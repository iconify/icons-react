import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hn6vjikxi.css';
import '../../css/n/nus4-e6se.css';
import '../../css/d/dm3sohm9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hn6vjikxi"/><path class="nus4-e6se"/><path class="dm3sohm9v"/></g>`,
		"fallback": "streamline-freehand-color:shopping-bag-side",
	});
}

export default Component;
