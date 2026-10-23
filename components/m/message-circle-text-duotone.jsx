import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ux9cb8bsw.css';
import '../../css/y/yo4cusbpd.css';
import '../../css/l/ldaeqpbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ux9cb8bsw"/><path class="yo4cusbpd"/><path class="ldaeqpbse"/></g>`,
		"fallback": "lucide-extended:message-circle-text-duotone",
	});
}

export default Component;
