import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohg8e5b_f.css';
import '../../css/v/vb4klzaha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ohg8e5b_f"/><path class="vb4klzaha"/></g>`,
		"fallback": "lucide-extended:quote-duotone",
	});
}

export default Component;
