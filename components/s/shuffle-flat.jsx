import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/obo3n8bqh.css';
import '../../css/r/r5btyobhf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="obo3n8bqh"/><path class="r5btyobhf"/></g>`,
		"fallback": "streamline-flex-color:shuffle-flat",
	});
}

export default Component;
