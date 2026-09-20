import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iqwgtxb1t.css';
import '../../css/s/s0ssi6b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iqwgtxb1t"/><path class="s0ssi6b4s"/></g>`,
		"fallback": "lets-icons:link-alt",
	});
}

export default Component;
