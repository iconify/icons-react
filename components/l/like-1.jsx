import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jwmwf7bcj.css';
import '../../css/t/t3e9lr25z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jwmwf7bcj"/><path class="t3e9lr25z"/></g>`,
		"fallback": "streamline:like-1",
	});
}

export default Component;
