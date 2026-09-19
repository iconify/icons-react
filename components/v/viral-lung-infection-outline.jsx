import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i-8kbdcmu.css';
import '../../css/e/ef26bmb9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i-8kbdcmu"/><path class="ef26bmb9e"/></g>`,
		"fallback": "healthicons:viral-lung-infection-outline",
	});
}

export default Component;
