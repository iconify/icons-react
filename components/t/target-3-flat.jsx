import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o6u_qo0dp.css';
import '../../css/o/omzqzwbge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o6u_qo0dp"/><path class="omzqzwbge"/></g>`,
		"fallback": "streamline-sharp-color:target-3-flat",
	});
}

export default Component;
