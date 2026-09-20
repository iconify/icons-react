import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vp96i0bxo.css';
import '../../css/t/tj4hj6boe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vp96i0bxo"/><path class="tj4hj6boe"/></g>`,
		"fallback": "streamline:padlock-square-1",
	});
}

export default Component;
