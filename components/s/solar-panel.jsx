import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hin23dbme.css';
import '../../css/w/wow0rcbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hin23dbme"/><path class="wow0rcbne"/></g>`,
		"fallback": "andrsrxn:solar-panel",
	});
}

export default Component;
