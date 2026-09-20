import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c3qe2jx0u.css';
import '../../css/q/q38_ip01a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c3qe2jx0u"/><path class="q38_ip01a"/></g>`,
		"fallback": "streamline-freehand:sim-card",
	});
}

export default Component;
