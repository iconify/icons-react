import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y9fg5_kkw.css';
import '../../css/c/c8xnjab9c.css';
import '../../css/e/e8ovzhe8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y9fg5_kkw"/><path class="c8xnjab9c"/><path class="e8ovzhe8p"/></g>`,
		"fallback": "solar:kanban-outline",
	});
}

export default Component;
