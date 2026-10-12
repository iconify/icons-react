import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxhthgbtb.css';
import '../../css/w/wsd978bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wxhthgbtb"/><path class="wsd978bdd"/></g>`,
		"fallback": "lucide-extended:mouse-right-duotone",
	});
}

export default Component;
