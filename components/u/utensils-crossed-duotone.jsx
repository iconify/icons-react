import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q43pkpbfy.css';
import '../../css/o/ox26w0hfk.css';
import '../../css/w/wpslppbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q43pkpbfy"/><path class="ox26w0hfk"/><path class="wpslppbzd"/></g>`,
		"fallback": "lucide-extended:utensils-crossed-duotone",
	});
}

export default Component;
