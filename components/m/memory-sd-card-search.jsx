import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tqvf5ab7w.css';
import '../../css/j/j5aipacmu.css';
import '../../css/w/wg0f-ab3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tqvf5ab7w"/><path class="j5aipacmu"/><path class="wg0f-ab3m"/></g>`,
		"fallback": "streamline-freehand:memory-sd-card-search",
	});
}

export default Component;
