import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qh2weobgl.css';
import '../../css/b/bp33wodtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qh2weobgl"/><path class="bp33wodtm"/></g>`,
		"fallback": "streamline-sharp-color:user-add-plus-flat",
	});
}

export default Component;
