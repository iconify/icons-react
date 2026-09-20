import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d8d6ltbjb.css';
import '../../css/d/drmlg2b0x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="d8d6ltbjb"/><path class="drmlg2b0x"/></g>`,
		"fallback": "streamline-plump-color:tiktok",
	});
}

export default Component;
