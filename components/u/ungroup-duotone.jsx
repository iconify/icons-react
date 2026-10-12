import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqburoz_r.css';
import '../../css/n/n94w8hbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gqburoz_r"/><path class="n94w8hbhr"/></g>`,
		"fallback": "lucide-extended:ungroup-duotone",
	});
}

export default Component;
