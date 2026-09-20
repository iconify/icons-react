import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jcd1ec3dy.css';
import '../../css/z/zeo2ynvmp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jcd1ec3dy"/><path class="zeo2ynvmp"/></g>`,
		"fallback": "ix:open-file-filled",
	});
}

export default Component;
