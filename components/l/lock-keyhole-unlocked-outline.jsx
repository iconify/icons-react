import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nqdx5tb9h.css';
import '../../css/l/lfajpi9ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nqdx5tb9h"/><path class="lfajpi9ix"/></g>`,
		"fallback": "solar:lock-keyhole-unlocked-outline",
	});
}

export default Component;
