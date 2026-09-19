import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mojqfzn7z.css';
import '../../css/s/suy5d8_au.css';
import '../../css/i/iahd35_lx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mojqfzn7z"/><circle class="suy5d8_au"/><path class="iahd35_lx"/></g>`,
		"fallback": "hugeicons:presentation-03",
	});
}

export default Component;
