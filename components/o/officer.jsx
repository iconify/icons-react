import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d0gp0tabp.css';
import '../../css/n/nquggrk8c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d0gp0tabp"/><path class="nquggrk8c"/></g>`,
		"fallback": "healthicons:officer",
	});
}

export default Component;
