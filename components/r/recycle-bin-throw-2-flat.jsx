import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z2lmqjbtj.css';
import '../../css/y/y856szcrc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z2lmqjbtj"/><path class="y856szcrc"/></g>`,
		"fallback": "streamline-flex-color:recycle-bin-throw-2-flat",
	});
}

export default Component;
