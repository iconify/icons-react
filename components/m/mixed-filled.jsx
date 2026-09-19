import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s7ffxjtxx.css';
import '../../css/e/e2n2mtqgq.css';
import '../../css/n/n320cvblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s7ffxjtxx"/><path class="e2n2mtqgq"/><path class="n320cvblp"/></g>`,
		"fallback": "bitcoin-icons:mixed-filled",
	});
}

export default Component;
