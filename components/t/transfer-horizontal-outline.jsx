import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ykgr9zdqp.css';
import '../../css/v/vrcrsbbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ykgr9zdqp"/><path class="vrcrsbbws"/></g>`,
		"fallback": "solar:transfer-horizontal-outline",
	});
}

export default Component;
