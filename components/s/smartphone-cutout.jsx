import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/onur_rgrp.css';
import '../../css/u/uub02fbik.css';
import '../../css/w/w1_hpxy5f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="onur_rgrp"/><path class="uub02fbik"/><path class="w1_hpxy5f"/></g>`,
		"fallback": "pepicons-print:smartphone-cutout",
	});
}

export default Component;
