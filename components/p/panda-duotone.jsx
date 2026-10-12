import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1yf0t_-d.css';
import '../../css/o/o6p4tpbfx.css';
import '../../css/s/sy8bl-7cu.css';
import '../../css/h/h6iu6vb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e1yf0t_-d"/><path class="o6p4tpbfx"/><path class="sy8bl-7cu"/><path class="h6iu6vb4y"/></g>`,
		"fallback": "lucide-extended:panda-duotone",
	});
}

export default Component;
