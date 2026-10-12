import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8nh66w5a.css';
import '../../css/b/b025iua0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8nh66w5a"/><path class="b025iua0j"/></g>`,
		"fallback": "lucide-extended:navigation-2-duotone",
	});
}

export default Component;
