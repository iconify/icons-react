import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jj_5alors.css';
import '../../css/x/x7r6vrb4q.css';
import '../../css/c/cl4qfyg_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jj_5alors"/><path class="x7r6vrb4q"/><path class="cl4qfyg_q"/></g>`,
		"fallback": "lucide-extended:mails-duotone",
	});
}

export default Component;
