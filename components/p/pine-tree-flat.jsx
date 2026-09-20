import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t51stqnoa.css';
import '../../css/b/bifl8csgk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t51stqnoa"/><path class="bifl8csgk"/></g>`,
		"fallback": "streamline-flex-color:pine-tree-flat",
	});
}

export default Component;
