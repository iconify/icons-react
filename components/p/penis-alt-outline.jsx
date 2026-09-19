import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ybki3253k.css';
import '../../css/n/nleufc7aj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ybki3253k"/><path class="nleufc7aj"/></g>`,
		"fallback": "healthicons:penis-alt-outline",
	});
}

export default Component;
