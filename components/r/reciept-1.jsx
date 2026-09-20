import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lytv7zf4z.css';
import '../../css/y/y7ss-ysib.css';
import '../../css/i/irw22q-lp.css';
import '../../css/d/d5ni959cp.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lytv7zf4z"/><path class="y7ss-ysib"/><path class="irw22q-lp"/><path class="d5ni959cp"/></g>`,
		"fallback": "streamline-stickies-color:reciept-1",
	});
}

export default Component;
