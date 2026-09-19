import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w49j0rbvv.css';
import '../../css/q/q84ioub0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="w49j0rbvv"/><path class="q84ioub0h"/></g>`,
		"fallback": "grommet-icons:js",
	});
}

export default Component;
