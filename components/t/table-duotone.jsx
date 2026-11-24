import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2qd08bwt.css';
import '../../css/l/li9cc6bmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s2qd08bwt"/><path class="li9cc6bmv"/></g>`,
		"fallback": "lucide-extended:table-duotone",
	});
}

export default Component;
