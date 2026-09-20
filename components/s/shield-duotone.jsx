import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ge7mv6-bu.css';
import '../../css/h/hfdui4ttv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ge7mv6-bu"/><path class="hfdui4ttv"/></g>`,
		"fallback": "si:shield-duotone",
	});
}

export default Component;
