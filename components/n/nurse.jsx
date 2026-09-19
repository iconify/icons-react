import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fh6--2k8g.css';
import '../../css/g/g_ih6h4_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fh6--2k8g"/><path class="g_ih6h4_w"/></g>`,
		"fallback": "healthicons:nurse",
	});
}

export default Component;
