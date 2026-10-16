import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/je-85d3pw.css';
import '../../css/q/qk-0cxbgu.css';
import '../../css/y/yybz8gcza.css';
import '../../css/s/s74z5lbrc.css';
import '../../css/j/jp8k7rlvc.css';
import '../../css/n/nra37d0ug.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="je-85d3pw"/><path class="qk-0cxbgu"/><path class="yybz8gcza"/><path class="s74z5lbrc"/><path class="jp8k7rlvc"/><path class="nra37d0ug"/></g>`,
		"fallback": "thesvg-color:tianji-dark",
	});
}

export default Component;
