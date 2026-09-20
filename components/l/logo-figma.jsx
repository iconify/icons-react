import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gi7xtcbkc.css';
import '../../css/q/qiya7tpcc.css';
import '../../css/i/ipmhgebmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gi7xtcbkc"/><path class="qiya7tpcc"/><path class="ipmhgebmb"/></g>`,
		"fallback": "tdesign:logo-figma",
	});
}

export default Component;
