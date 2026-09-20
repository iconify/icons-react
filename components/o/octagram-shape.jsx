import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w-gdv-r7f.css';
import '../../css/u/u2t-ltb8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="w-gdv-r7f"/><path class="u2t-ltb8n"/></g>`,
		"fallback": "streamline-plump-color:octagram-shape",
	});
}

export default Component;
