import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdbi9ab5n.css';
import '../../css/t/teaky1bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tdbi9ab5n"/><path class="teaky1bob"/></g>`,
		"fallback": "lucide-extended:stretch-horizontal-duotone",
	});
}

export default Component;
