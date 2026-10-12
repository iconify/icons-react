import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jiyrhnkcn.css';
import '../../css/e/esf9wtdqe.css';
import '../../css/y/y4w4nvbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jiyrhnkcn"/><path class="esf9wtdqe"/><path class="y4w4nvbqu"/></g>`,
		"fallback": "lucide-extended:lock-duotone",
	});
}

export default Component;
