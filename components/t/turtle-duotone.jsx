import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6b0xcc8y.css';
import '../../css/u/u7tmg3jvf.css';
import '../../css/k/kcrq3-bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i6b0xcc8y"/><path class="u7tmg3jvf"/><path class="kcrq3-bds"/></g>`,
		"fallback": "lucide-extended:turtle-duotone",
	});
}

export default Component;
