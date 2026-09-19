import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jix0_wbbx.css';
import '../../css/b/bd13yxb1u.css';
import '../../css/e/eyowyccos.css';
import '../../css/z/zls6mvbbt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="jix0_wbbx"/><path class="bd13yxb1u"/><path class="eyowyccos"/><path class="zls6mvbbt"/></g>`,
		"fallback": "icon-park-solid:trumpet",
	});
}

export default Component;
