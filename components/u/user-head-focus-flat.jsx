import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/io5rpeu_f.css';
import '../../css/h/hyx3opbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="io5rpeu_f"/><path class="hyx3opbnm"/></g>`,
		"fallback": "streamline-sharp-color:user-head-focus-flat",
	});
}

export default Component;
