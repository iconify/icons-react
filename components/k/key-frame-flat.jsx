import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q31dl4bje.css';
import '../../css/n/ni-gi5bej.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q31dl4bje"/><path class="ni-gi5bej"/></g>`,
		"fallback": "streamline-flex-color:key-frame-flat",
	});
}

export default Component;
