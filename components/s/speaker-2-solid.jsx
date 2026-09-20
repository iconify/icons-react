import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nbj0tzb-p.css';
import '../../css/u/ua3vqvb8o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nbj0tzb-p"/><path class="ua3vqvb8o"/></g>`,
		"fallback": "streamline-plump:speaker-2-solid",
	});
}

export default Component;
