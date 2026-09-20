import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qku5tewnz.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/u/updfmxb9e.css';
import '../../css/j/j-jl-dbdk.css';
import '../../css/o/orub42g9y.css';
import '../../css/q/qtmh9-bzf.css';
import '../../css/w/wjobzabgk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qku5tewnz"/><g class="brzn_0bpr"><path class="updfmxb9e"/><path class="j-jl-dbdk"/><ellipse class="orub42g9y"/><path class="qtmh9-bzf"/></g><ellipse class="wjobzabgk"/>`,
		"fallback": "openmoji:smiling-face-with-halo",
	});
}

export default Component;
