import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b5_8p3bhi.css';
import '../../css/s/si-stjb5k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b5_8p3bhi"/><path class="si-stjb5k"/></g>`,
		"fallback": "healthicons:pediatric-surgery2x-outline",
	});
}

export default Component;
