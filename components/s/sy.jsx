import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/umbnhhb9z.css';
import '../../css/m/mdsn5dp1e.css';
import '../../css/j/j2i80_c1v.css';
import '../../css/b/bakiw7wnb.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="umbnhhb9z"/><path class="mdsn5dp1e"/><path class="j2i80_c1v"/><path class="bakiw7wnb"/></g>`,
		"fallback": "flagpack:sy",
	});
}

export default Component;
