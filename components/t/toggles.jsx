import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/u/ufx_3tb7d.css';
import '../../css/o/omlm7pxxb.css';
import '../../css/p/pil4o0bhx.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 4)" class="jtowsomii"><circle class="ufx_3tb7d"/><path class="omlm7pxxb"/><path class="pil4o0bhx"/></g>`,
		"fallback": "system-uicons:toggles",
	});
}

export default Component;
