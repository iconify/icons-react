import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1j30obyh.css';
import '../../css/s/sw7yiokxl.css';
import '../../css/j/j7plc1b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j1j30obyh"/><path class="sw7yiokxl"/><path class="j7plc1b6p"/></g>`,
		"fallback": "tabler:plant-2",
	});
}

export default Component;
