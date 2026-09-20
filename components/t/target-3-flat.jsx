import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jb_a1uqil.css';
import '../../css/q/qylvsr7kg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jb_a1uqil"/><path class="qylvsr7kg"/></g>`,
		"fallback": "streamline-color:target-3-flat",
	});
}

export default Component;
