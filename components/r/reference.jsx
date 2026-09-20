import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pfxmy0brn.css';
import '../../css/m/mro1p6pmy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pfxmy0brn"/><path class="mro1p6pmy"/></g>`,
		"fallback": "ix:reference",
	});
}

export default Component;
