import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ax81fwdcr.css';
import '../../css/p/p9mkjc_jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ax81fwdcr"/><path class="p9mkjc_jx"/></g>`,
		"fallback": "reicon:lovely",
	});
}

export default Component;
