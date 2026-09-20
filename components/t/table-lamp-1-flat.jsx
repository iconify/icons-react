import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t9fzuq14f.css';
import '../../css/h/hlhhv2bfb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t9fzuq14f"/><path class="hlhhv2bfb"/></g>`,
		"fallback": "streamline-color:table-lamp-1-flat",
	});
}

export default Component;
