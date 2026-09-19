import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kva8qed7a.css';
import '../../css/g/gyy4h_b1m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kva8qed7a"/><path class="gyy4h_b1m"/></g>`,
		"fallback": "healthicons:liver",
	});
}

export default Component;
