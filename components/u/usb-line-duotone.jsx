import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/swsab_86e.css';
import '../../css/f/fw5rt46mg.css';
import '../../css/j/j890_2b_s.css';
import '../../css/r/r6c1y7b6t.css';
import '../../css/s/sf8fwubxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="swsab_86e"/><circle class="fw5rt46mg"/><path class="j890_2b_s"/><path class="r6c1y7b6t"/><path class="sf8fwubxu"/></g>`,
		"fallback": "solar:usb-line-duotone",
	});
}

export default Component;
