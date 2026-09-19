import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wei_cibse.css';
import '../../css/b/b3o1m5bbn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wei_cibse"/><path class="b3o1m5bbn"/></g>`,
		"fallback": "cryptocurrency:rdd",
	});
}

export default Component;
