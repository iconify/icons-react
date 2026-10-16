import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umzj1wb-f.css';
import '../../css/m/mt41_nycl.css';
import '../../css/i/i_o47vnuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="umzj1wb-f"/><path class="mt41_nycl"/><path class="i_o47vnuo"/></g>`,
		"fallback": "andrsrxn:squiggles-sparkle",
	});
}

export default Component;
