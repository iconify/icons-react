import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phmuobg3b.css';
import '../../css/p/p7p86fq_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="phmuobg3b"/><path class="p7p86fq_h"/></g>`,
		"fallback": "lucide-extended:pen-line-duotone",
	});
}

export default Component;
