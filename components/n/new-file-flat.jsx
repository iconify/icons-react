import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bs8x7ybcv.css';
import '../../css/i/ip9gqvb5h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bs8x7ybcv"/><path class="ip9gqvb5h"/></g>`,
		"fallback": "streamline-flex-color:new-file-flat",
	});
}

export default Component;
