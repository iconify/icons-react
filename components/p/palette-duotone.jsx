import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9tcbvs3n.css';
import '../../css/f/fn9on300s.css';
import '../../css/h/hdqah4lam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r9tcbvs3n"/><path class="fn9on300s"/><path class="hdqah4lam"/></g>`,
		"fallback": "lucide-extended:palette-duotone",
	});
}

export default Component;
