import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/amb63ucuh.css';
import '../../css/d/d9tuwubhk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="amb63ucuh"/><path class="d9tuwubhk"/></g>`,
		"fallback": "streamline:laptop-camera",
	});
}

export default Component;
