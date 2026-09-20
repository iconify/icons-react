import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kr6c_dblg.css';
import '../../css/v/vw109zbfo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kr6c_dblg"/><path class="vw109zbfo"/></g>`,
		"fallback": "streamline-flex-color:warning-diamond-flat",
	});
}

export default Component;
