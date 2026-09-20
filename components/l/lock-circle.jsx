import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k_awcub4j.css';
import '../../css/m/mdta3r25r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k_awcub4j"/><path class="mdta3r25r"/></g>`,
		"fallback": "streamline-freehand:lock-circle",
	});
}

export default Component;
