import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s8hqlmb1h.css';
import '../../css/z/z26b6kb_g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s8hqlmb1h"/><path class="z26b6kb_g"/></g>`,
		"fallback": "streamline-color:underline-text-1-flat",
	});
}

export default Component;
