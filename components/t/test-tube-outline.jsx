import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qzrudm6qf.css';
import '../../css/b/b7o9nsc3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qzrudm6qf"/><path class="b7o9nsc3w"/></g>`,
		"fallback": "solar:test-tube-outline",
	});
}

export default Component;
