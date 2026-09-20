import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z08-pnbqw.css';
import '../../css/h/h3lr7dtei.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z08-pnbqw"/><path class="h3lr7dtei"/></g>`,
		"fallback": "streamline:make-up-brush",
	});
}

export default Component;
