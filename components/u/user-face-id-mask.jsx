import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w_x5rnf7z.css';
import '../../css/r/rrogs_byq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="w_x5rnf7z"/><path class="rrogs_byq"/></g>`,
		"fallback": "streamline-plump-color:user-face-id-mask",
	});
}

export default Component;
