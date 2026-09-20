import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/sbqf8lmdc.css';
import '../../css/n/n07e_fb4s.css';
import '../../css/x/xhvupobvv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="sbqf8lmdc"/><path class="n07e_fb4s"/><path class="xhvupobvv"/></g>`,
		"fallback": "streamline-plump:video-close-captioning",
	});
}

export default Component;
