import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vr7_k0dyh.css';
import '../../css/r/rs0ntdh1t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vr7_k0dyh"/><path class="rs0ntdh1t"/></g>`,
		"fallback": "healthicons:ppe-santizer-alt",
	});
}

export default Component;
