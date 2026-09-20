import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/amkfg46sm.css';
import '../../css/a/ae7e6sb9w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="amkfg46sm"/><path class="ae7e6sb9w"/></g>`,
		"fallback": "streamline-flex-color:stopwatch-three-quarter-flat",
	});
}

export default Component;
