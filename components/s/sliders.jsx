import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lz9qfxb6b.css';
import '../../css/v/v9almc-9r.css';
import '../../css/u/u0l9fhfjn.css';
import '../../css/l/lfijr0r5r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lz9qfxb6b"/><path class="v9almc-9r"/><path class="u0l9fhfjn"/><path class="lfijr0r5r"/></g>`,
		"fallback": "pepicons:sliders",
	});
}

export default Component;
