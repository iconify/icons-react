import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/sbqf8lmdc.css';
import '../../css/c/cwak6ub6e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="sbqf8lmdc"/><path class="cwak6ub6e"/></g>`,
		"fallback": "streamline-plump:video-subtitles",
	});
}

export default Component;
