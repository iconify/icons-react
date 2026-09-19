import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/g/gnu-tacti.css';
import '../../css/f/fxm53-wkn.css';
import '../../css/a/a9mxpshxm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="gnu-tacti"/><path class="fxm53-wkn"/><path class="a9mxpshxm"/></g>`,
		"fallback": "icon-park:volume-notice",
	});
}

export default Component;
