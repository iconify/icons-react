import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o79s8nbyt.css';
import '../../css/t/t-rxw92sk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o79s8nbyt"/><path class="t-rxw92sk"/></g>`,
		"fallback": "fad:speaker",
	});
}

export default Component;
