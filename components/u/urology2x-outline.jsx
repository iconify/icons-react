import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jtts59-jr.css';
import '../../css/v/vgje6nf6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jtts59-jr"/><path class="vgje6nf6a"/></g>`,
		"fallback": "healthicons:urology2x-outline",
	});
}

export default Component;
