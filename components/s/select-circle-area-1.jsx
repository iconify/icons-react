import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xuh7znbmb.css';
import '../../css/f/fnecjwb1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="xuh7znbmb"/><path class="fnecjwb1i"/></g>`,
		"fallback": "streamline-plump-color:select-circle-area-1",
	});
}

export default Component;
