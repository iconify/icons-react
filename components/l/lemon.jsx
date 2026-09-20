import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vdcafq03r.css';
import '../../css/i/i9q6r1isj.css';
import '../../css/d/dpqm70bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vdcafq03r"/><path class="i9q6r1isj"/><path class="dpqm70bwc"/></g>`,
		"fallback": "tdesign:lemon",
	});
}

export default Component;
