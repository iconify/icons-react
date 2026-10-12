import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5ra7zw6l.css';
import '../../css/w/w7swq0boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q5ra7zw6l"/><path class="w7swq0boj"/></g>`,
		"fallback": "lucide-extended:table-cells-merge-duotone",
	});
}

export default Component;
