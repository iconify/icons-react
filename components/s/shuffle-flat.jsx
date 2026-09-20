import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v0of__d6l.css';
import '../../css/z/zqcfynfxm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v0of__d6l"/><path class="zqcfynfxm"/></g>`,
		"fallback": "streamline-color:shuffle-flat",
	});
}

export default Component;
