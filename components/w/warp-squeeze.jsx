import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/skyd54b2s.css';
import '../../css/c/czoh3luyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="skyd54b2s"/><path class="czoh3luyr"/></g>`,
		"fallback": "streamline-plump-color:warp-squeeze",
	});
}

export default Component;
