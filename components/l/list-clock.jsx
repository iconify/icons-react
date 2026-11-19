import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwc5gabwv.css';
import '../../css/t/tocuivfel.css';
import '../../css/n/ntdv43b1z.css';
import '../../css/k/k4ssgdc0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nwc5gabwv"/><circle class="tocuivfel"/><circle class="ntdv43b1z"/><path class="k4ssgdc0g"/></g>`,
		"fallback": "andrsrxn:list-clock",
	});
}

export default Component;
