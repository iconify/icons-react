import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/q/qx1rt3bor.css';
import '../../css/l/l477l9bhb.css';
import '../../css/y/ybktkkb_v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path clip-rule="evenodd" class="qx1rt3bor"/><path class="l477l9bhb"/><path class="ybktkkb_v"/></g>`,
		"fallback": "icon-park:sperm",
	});
}

export default Component;
