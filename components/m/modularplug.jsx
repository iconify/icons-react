import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f9vy69hcl.css';
import '../../css/a/akjzcpb7k.css';
import '../../css/r/rtgm_3bco.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f9vy69hcl"/><path class="akjzcpb7k"/><path class="rtgm_3bco"/></g>`,
		"fallback": "fad:modularplug",
	});
}

export default Component;
