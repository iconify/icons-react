import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s2sjd_bal.css';
import '../../css/l/lk154dd3j.css';
import '../../css/z/zj5fc_biz.css';
import '../../css/o/ordcnwbgw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s2sjd_bal"/><path class="lk154dd3j"/><path class="zj5fc_biz"/><path clip-rule="evenodd" class="ordcnwbgw"/></g>`,
		"fallback": "healthicons:surveilance-officer",
	});
}

export default Component;
