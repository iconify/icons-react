import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p1nehyewa.css';
import '../../css/q/qe1p392fw.css';
import '../../css/e/e5d74-yqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p1nehyewa"/><path class="qe1p392fw"/><path class="e5d74-yqg"/></g>`,
		"fallback": "stash:paper-clock-duotone",
	});
}

export default Component;
