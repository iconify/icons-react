import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7r3bok2a.css';
import '../../css/t/tiefb7boe.css';
import '../../css/q/qnm-tdbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p7r3bok2a"/><path class="tiefb7boe"/><path class="qnm-tdbsp"/></g>`,
		"fallback": "lucide-extended:milk-duotone",
	});
}

export default Component;
