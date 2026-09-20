import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wexq0gd0w.css';
import '../../css/n/nffe8oyfe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="wexq0gd0w"/><path class="nffe8oyfe"/></g>`,
		"fallback": "streamline-plump-color:page-setting",
	});
}

export default Component;
