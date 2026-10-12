import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a397vwbha.css';
import '../../css/t/t0x-i1v4p.css';
import '../../css/f/f5ysqvu5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a397vwbha"/><path class="t0x-i1v4p"/><path class="f5ysqvu5t"/></g>`,
		"fallback": "lucide-extended:notebook-pen-duotone",
	});
}

export default Component;
