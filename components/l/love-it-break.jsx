import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zll40lbqt.css';
import '../../css/l/lrridv7hu.css';
import '../../css/j/j2tz8fb0g.css';
import '../../css/w/w8vz_lqma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zll40lbqt"/><path class="lrridv7hu"/><path class="j2tz8fb0g"/><path class="w8vz_lqma"/></g>`,
		"fallback": "streamline-ultimate-color:love-it-break",
	});
}

export default Component;
