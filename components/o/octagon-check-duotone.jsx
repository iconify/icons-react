import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l907abc-p.css';
import '../../css/r/r42xkob4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l907abc-p"/><path class="r42xkob4y"/></g>`,
		"fallback": "si:octagon-check-duotone",
	});
}

export default Component;
