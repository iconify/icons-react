import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awuprrb2l.css';
import '../../css/s/sigei6ulc.css';
import '../../css/h/hh3b10bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="awuprrb2l"/><path class="sigei6ulc"/><path class="hh3b10bzq"/></g>`,
		"fallback": "lucide-extended:mail-x-duotone",
	});
}

export default Component;
