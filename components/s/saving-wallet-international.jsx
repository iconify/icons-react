import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eru7w6gtf.css';
import '../../css/p/p6pyttbii.css';
import '../../css/k/kpsrmabjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eru7w6gtf"/><path class="p6pyttbii"/><path class="kpsrmabjd"/></g>`,
		"fallback": "streamline-freehand:saving-wallet-international",
	});
}

export default Component;
