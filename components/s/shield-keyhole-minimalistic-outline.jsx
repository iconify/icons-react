import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v-6x5sb0h.css';
import '../../css/x/xcv_n5bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v-6x5sb0h"/><path class="xcv_n5bks"/></g>`,
		"fallback": "solar:shield-keyhole-minimalistic-outline",
	});
}

export default Component;
