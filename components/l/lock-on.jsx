import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_jdtd8kg.css';
import '../../css/t/tpwxeac3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r_jdtd8kg"/><path class="tpwxeac3b"/></g>`,
		"fallback": "tdesign:lock-on",
	});
}

export default Component;
