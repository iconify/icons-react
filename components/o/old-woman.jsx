import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nn_3an3ud.css';
import '../../css/n/n9z4uxwxj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nn_3an3ud"/><path class="n9z4uxwxj"/></g>`,
		"fallback": "healthicons:old-woman",
	});
}

export default Component;
