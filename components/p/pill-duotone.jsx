import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hk0oofb4m.css';
import '../../css/u/u8j2dcbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hk0oofb4m"/><path class="u8j2dcbea"/></g>`,
		"fallback": "lucide-extended:pill-duotone",
	});
}

export default Component;
