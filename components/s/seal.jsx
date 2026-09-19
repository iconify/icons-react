import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/x/xeuvkacwg.css';
import '../../css/z/zacn5xvop.css';
import '../../css/g/g5-_zj_ar.css';
import '../../css/f/fj1iar32b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="xeuvkacwg"/><path class="zacn5xvop"/><path class="g5-_zj_ar"/><rect class="fj1iar32b"/></g>`,
		"fallback": "icon-park:seal",
	});
}

export default Component;
