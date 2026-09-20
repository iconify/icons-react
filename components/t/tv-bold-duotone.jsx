import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w25y_3zel.css';
import '../../css/x/xkt26-7va.css';
import '../../css/r/r_bmoabot.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/p/p343m9bwv.css';
import '../../css/g/g9yhdubnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w25y_3zel"/><path class="xkt26-7va"/><path class="r_bmoabot"/><g class="mc2zb0bvp"><path class="p343m9bwv"/><path class="g9yhdubnq"/></g></g>`,
		"fallback": "solar:tv-bold-duotone",
	});
}

export default Component;
