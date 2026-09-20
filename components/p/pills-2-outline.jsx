import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/ghvx2ub4r.css';
import '../../css/m/mnvv_hsxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ghvx2ub4r"/><path class="mnvv_hsxz"/></g>`,
		"fallback": "solar:pills-2-outline",
	});
}

export default Component;
