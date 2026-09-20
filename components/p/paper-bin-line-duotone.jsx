import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/op39z1b0t.css';
import '../../css/f/fjiyggelq.css';
import '../../css/x/xfcsm6b8b.css';
import '../../css/b/bbj_fcggl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="op39z1b0t"/><path class="fjiyggelq"/><path class="xfcsm6b8b"/><path class="bbj_fcggl"/></g>`,
		"fallback": "solar:paper-bin-line-duotone",
	});
}

export default Component;
