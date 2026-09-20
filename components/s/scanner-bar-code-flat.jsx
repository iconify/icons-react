import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xt2k4r6vg.css';
import '../../css/x/xvkvswr6o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xt2k4r6vg"/><path class="xvkvswr6o"/></g>`,
		"fallback": "streamline-color:scanner-bar-code-flat",
	});
}

export default Component;
