import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/e/ekwko04jt.css';
import '../../css/k/ksqdnab9y.css';
import '../../css/d/dq_gcyqby.css';
import '../../css/x/xf5046bzz.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="ekwko04jt"/><path class="ksqdnab9y"/><path class="dq_gcyqby"/><path class="xf5046bzz"/></g>`,
		"fallback": "streamline-stickies-color:time",
	});
}

export default Component;
