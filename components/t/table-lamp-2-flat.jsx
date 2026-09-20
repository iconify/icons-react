import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gdpa5q-9l.css';
import '../../css/s/slm1inv9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gdpa5q-9l"/><path class="slm1inv9b"/></g>`,
		"fallback": "streamline-sharp-color:table-lamp-2-flat",
	});
}

export default Component;
