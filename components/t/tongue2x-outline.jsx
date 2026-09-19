import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vhho_5qcu.css';
import '../../css/a/a6-4zgbbu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vhho_5qcu"/><path class="a6-4zgbbu"/></g>`,
		"fallback": "healthicons:tongue2x-outline",
	});
}

export default Component;
