import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/x/x0s0fvb3k.css';
import '../../css/g/gcdj9wvof.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="x0s0fvb3k"/><path class="gcdj9wvof"/></g>`,
		"fallback": "icon-park:leo",
	});
}

export default Component;
