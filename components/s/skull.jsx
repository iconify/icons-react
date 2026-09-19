import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/d7nsuhb5p.css';
import '../../css/k/k8mutcwuq.css';
import '../../css/n/nn56ddcae.css';
import '../../css/s/skwuo4btv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="d7nsuhb5p"/><path class="k8mutcwuq"/><path class="nn56ddcae"/><path class="skwuo4btv"/></g>`,
		"fallback": "icon-park-outline:skull",
	});
}

export default Component;
