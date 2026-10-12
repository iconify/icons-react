import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gn6-_qq2n.css';
import '../../css/k/kourv_b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gn6-_qq2n"/><path class="kourv_b6d"/></g>`,
		"fallback": "lucide-extended:toy-brick-duotone",
	});
}

export default Component;
