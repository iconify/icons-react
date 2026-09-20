import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fqidwyi1u.css';
import '../../css/t/ty3pr3ewg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fqidwyi1u"/><path class="ty3pr3ewg"/></g>`,
		"fallback": "streamline-color:screen-broadcast-flat",
	});
}

export default Component;
