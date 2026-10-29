import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rf4w12c9e.css';
import '../../css/r/r5fftoboz.css';
import '../../css/v/v0ntukbdq.css';
import '../../css/y/y49trb-sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rf4w12c9e wm-deco"/><path class="r5fftoboz wm-deco"/><path class="v0ntukbdq wm-k"/><path class="wm-a y49trb-sx"/></g>`,
		"fallback": "withicons:message-circle-more-blueprint",
	});
}

export default Component;
