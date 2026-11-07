import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkgxa5i2k.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/i/iaue1ubqv.css';
import '../../css/y/yfaivcbbe.css';
import '../../css/a/a1bispcjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkgxa5i2k"/><g class="xtpeb-edw"><path class="iaue1ubqv"/><path class="yfaivcbbe"/><path class="a1bispcjc"/></g>`,
		"fallback": "solar:volume-cross-bold-duotone",
	});
}

export default Component;
