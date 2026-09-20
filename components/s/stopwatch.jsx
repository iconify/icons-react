import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h35gavp_d.css';
import '../../css/n/nsadkdbpi.css';
import '../../css/d/d1w0exbxa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h35gavp_d"/><path class="nsadkdbpi"/><path class="d1w0exbxa"/></g>`,
		"fallback": "streamline-flex-color:stopwatch",
	});
}

export default Component;
