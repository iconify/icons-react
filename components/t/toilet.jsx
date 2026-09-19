import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/f/fl-wx5upf.css';
import '../../css/j/jpgeqgbbo.css';
import '../../css/z/zp5_yccnt.css';
import '../../css/c/c1fwufksq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="fl-wx5upf"/><path class="jpgeqgbbo"/><path class="zp5_yccnt"/><path class="c1fwufksq"/></g>`,
		"fallback": "icon-park:toilet",
	});
}

export default Component;
