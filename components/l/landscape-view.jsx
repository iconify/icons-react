import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u1zt-pbat.css';
import '../../css/w/wo1u9yffx.css';
import '../../css/x/x6j3_gbti.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u1zt-pbat"/><path class="wo1u9yffx"/><path class="x6j3_gbti"/></g>`,
		"fallback": "streamline-plump:landscape-view",
	});
}

export default Component;
