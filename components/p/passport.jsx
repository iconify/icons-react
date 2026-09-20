import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vqz7wfbpi.css';
import '../../css/c/cu-rr0bqf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vqz7wfbpi"/><path class="cu-rr0bqf"/></g>`,
		"fallback": "streamline:passport",
	});
}

export default Component;
