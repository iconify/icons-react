import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/umbnhhb9z.css';
import '../../css/j/j2i80_c1v.css';
import '../../css/b/bakiw7wnb.css';
import '../../css/u/uwcq_8bri.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="umbnhhb9z"/><path class="j2i80_c1v"/><path class="bakiw7wnb"/><path class="uwcq_8bri"/></g>`,
		"fallback": "flagpack:sd",
	});
}

export default Component;
