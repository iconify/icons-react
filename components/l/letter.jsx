import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hrbno-bkp.css';
import '../../css/r/rwf2c-bxi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hrbno-bkp"/><path class="rwf2c-bxi"/></g>`,
		"fallback": "pepicons-pencil:letter",
	});
}

export default Component;
