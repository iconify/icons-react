import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j25ctl-6v.css';
import '../../css/k/knzlmv6ci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j25ctl-6v"/><path class="knzlmv6ci"/></g>`,
		"fallback": "solar:mirror-right-outline",
	});
}

export default Component;
