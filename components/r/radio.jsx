import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i8gevvbms.css';
import '../../css/t/tjl2s7blu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i8gevvbms"/><path class="tjl2s7blu"/></g>`,
		"fallback": "streamline:radio",
	});
}

export default Component;
