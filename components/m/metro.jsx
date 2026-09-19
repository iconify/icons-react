import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wr-t-5oaa.css';
import '../../css/q/qcw4u49ik.css';
import '../../css/n/ngtd4hbhd.css';
import '../../css/f/f24suco6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wr-t-5oaa"/><path class="qcw4u49ik"/><path class="ngtd4hbhd"/><path class="f24suco6j"/></g>`,
		"fallback": "iconoir:metro",
	});
}

export default Component;
