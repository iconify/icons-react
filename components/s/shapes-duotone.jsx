import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cfp07t9oc.css';
import '../../css/j/ja1bbklcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cfp07t9oc"/><path class="ja1bbklcm"/></g>`,
		"fallback": "lucide-extended:shapes-duotone",
	});
}

export default Component;
