import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wu-98cc1r.css';
import '../../css/i/ielxc1b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wu-98cc1r"/><path class="ielxc1b8p"/></g>`,
		"fallback": "lucide-extended:vibrate-duotone",
	});
}

export default Component;
