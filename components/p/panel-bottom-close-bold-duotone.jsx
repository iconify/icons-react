import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq9rqn1zt.css';
import '../../css/w/wj_8rllsk.css';
import '../../css/n/na-mcbnwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nq9rqn1zt"/><path class="wj_8rllsk"/><path class="na-mcbnwp"/>`,
		"fallback": "solar:panel-bottom-close-bold-duotone",
	});
}

export default Component;
