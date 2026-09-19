import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/e/ek7otbbmh.css';
import '../../css/d/dq-gmxanu.css';
import '../../css/p/p7ljzqyoh.css';
import '../../css/t/tqb_6nb6c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ek7otbbmh"/><path class="dq-gmxanu"/><path class="p7ljzqyoh"/><circle class="tqb_6nb6c"/></g>`,
		"fallback": "icon-park:radar-three",
	});
}

export default Component;
