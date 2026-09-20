import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rap11obza.css';
import '../../css/e/euxf14hyq.css';
import '../../css/g/ga7t0girt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rap11obza"/><circle class="euxf14hyq"/><path class="ga7t0girt"/></g>`,
		"fallback": "solar:passport-minimalistic-line-duotone",
	});
}

export default Component;
