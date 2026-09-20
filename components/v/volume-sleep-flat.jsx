import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fjl_qh8ow.css';
import '../../css/o/ooxr-hb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fjl_qh8ow"/><path class="ooxr-hb7g"/></g>`,
		"fallback": "streamline-sharp-color:volume-sleep-flat",
	});
}

export default Component;
