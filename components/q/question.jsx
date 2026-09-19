import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihd2q809h.css';
import '../../css/o/olg0x-m0f.css';
import '../../css/s/sovlp1b4o.css';
import '../../css/f/fv0al6bdl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ihd2q809h"/><path clip-rule="evenodd" class="olg0x-m0f"/><path clip-rule="evenodd" class="sovlp1b4o"/><path clip-rule="evenodd" class="fv0al6bdl"/></g>`,
		"fallback": "pepicons:question",
	});
}

export default Component;
