import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-n0_5b8w.css';
import '../../css/l/lwm0shbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-n0_5b8w"/><path clip-rule="evenodd" class="lwm0shbgj"/>`,
		"fallback": "mingcute:schedule-fill",
	});
}

export default Component;
