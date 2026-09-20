import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/gkra3_bci.css';
import '../../css/y/y30nsybkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="gkra3_bci"/><path class="y30nsybkp"/></g>`,
		"fallback": "lets-icons:line-up-light",
	});
}

export default Component;
