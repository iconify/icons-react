import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ild9oxbtf.css';
import '../../css/j/j5r_t4b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ild9oxbtf"/><path class="j5r_t4b4e"/></g>`,
		"fallback": "solar:login-3-bold-duotone",
	});
}

export default Component;
