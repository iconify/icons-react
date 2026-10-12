import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4h-1ibfn.css';
import '../../css/c/c5mar1biz.css';
import '../../css/g/g48c9l9px.css';
import '../../css/b/bv-9myb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c4h-1ibfn"/><path class="c5mar1biz"/><path class="g48c9l9px"/><path class="bv-9myb7n"/></g>`,
		"fallback": "lucide-extended:receipt-swiss-franc-duotone",
	});
}

export default Component;
