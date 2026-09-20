import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pxp2rab3b.css';
import '../../css/l/lcs_qdzgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="pxp2rab3b"/><path class="lcs_qdzgc"/></g>`,
		"fallback": "proicons:person-2",
	});
}

export default Component;
