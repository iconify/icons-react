import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ah8go7bph.css';
import '../../css/u/uhv6q9tdz.css';
import '../../css/n/nu1ky11cm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ah8go7bph"/><path class="uhv6q9tdz"/><path class="nu1ky11cm"/></g>`,
		"fallback": "lucide-extended:triangle-alert-duotone",
	});
}

export default Component;
