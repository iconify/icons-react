import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yili_cwtj.css';
import '../../css/i/im8__db2r.css';
import '../../css/j/j6489r_4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yili_cwtj"/><path clip-rule="evenodd" class="im8__db2r"/><path class="j6489r_4a"/></g>`,
		"fallback": "healthicons:lactose-outline",
	});
}

export default Component;
