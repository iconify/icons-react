import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/t4k53fbtz.css';
import '../../css/i/ihek4ssmd.css';
import '../../css/w/wr8ro6bkc.css';
import '../../css/u/u7sddvbwu.css';
import '../../css/g/gzxh5wyzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="t4k53fbtz"/><path class="ihek4ssmd"/><path class="wr8ro6bkc"/><path class="u7sddvbwu"/><path class="gzxh5wyzf"/></g>`,
		"fallback": "matita:paw-print",
	});
}

export default Component;
