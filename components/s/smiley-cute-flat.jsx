import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/affh-gusn.css';
import '../../css/x/x-gnjtbyx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="affh-gusn"/><path class="x-gnjtbyx"/></g>`,
		"fallback": "streamline-color:smiley-cute-flat",
	});
}

export default Component;
