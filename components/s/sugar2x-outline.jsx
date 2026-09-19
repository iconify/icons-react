import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g_v8brpbj.css';
import '../../css/d/dq26ortya.css';
import '../../css/z/zhk-n7-an.css';
import '../../css/s/sc_en5e5i.css';
import '../../css/u/ug3wr4buj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g_v8brpbj"/><path class="dq26ortya"/><path class="zhk-n7-an"/><path class="sc_en5e5i"/><path class="ug3wr4buj"/></g>`,
		"fallback": "healthicons:sugar2x-outline",
	});
}

export default Component;
