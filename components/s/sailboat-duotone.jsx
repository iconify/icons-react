import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odr5n16ys.css';
import '../../css/f/fuqcm9bty.css';
import '../../css/g/gnp_skboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="odr5n16ys"/><path class="fuqcm9bty"/><path class="gnp_skboa"/></g>`,
		"fallback": "lucide-extended:sailboat-duotone",
	});
}

export default Component;
