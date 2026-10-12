import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wb4hvmmhg.css';
import '../../css/m/mrseusbbp.css';
import '../../css/n/n7-rbcc3s.css';
import '../../css/o/ocgaxn_is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wb4hvmmhg"/><path class="mrseusbbp"/><path class="n7-rbcc3s"/><path class="ocgaxn_is"/></g>`,
		"fallback": "lucide-extended:medal-duotone",
	});
}

export default Component;
