import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2ag24bhm.css';
import '../../css/v/vsu8o2e_j.css';
import '../../css/q/qj4n1fmer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l2ag24bhm"/><path class="vsu8o2e_j"/><path class="qj4n1fmer"/></g>`,
		"fallback": "lucide-extended:key-round-duotone",
	});
}

export default Component;
