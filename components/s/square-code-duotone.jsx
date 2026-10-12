import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_ec1fbcy.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/s/s6te4phsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u_ec1fbcy"/><path class="s1a2eew1e"/><path class="s6te4phsj"/></g>`,
		"fallback": "lucide-extended:square-code-duotone",
	});
}

export default Component;
