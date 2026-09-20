import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/srnrjebyw.css';
import '../../css/q/qk_7d9b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="srnrjebyw"/><path class="qk_7d9b5n"/></g>`,
		"fallback": "solar:mirror-left-outline",
	});
}

export default Component;
