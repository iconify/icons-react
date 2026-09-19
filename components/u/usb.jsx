import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yeuuqiwtl.css';
import '../../css/o/ofq_gr2ov.css';
import '../../css/a/a_4yo5bss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yeuuqiwtl"/><path class="ofq_gr2ov"/><path class="a_4yo5bss"/></g>`,
		"fallback": "hugeicons:usb",
	});
}

export default Component;
