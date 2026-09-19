import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1gp5-u1c.css';
import '../../css/m/myw_a-bni.css';
import '../../css/k/kb9eddb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r1gp5-u1c"/><path class="myw_a-bni"/><path class="kb9eddb8c"/></g>`,
		"fallback": "iconamoon:store-duotone",
	});
}

export default Component;
