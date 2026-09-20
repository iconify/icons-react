import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p86j2-b6v.css';
import '../../css/l/lc05vkmqz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p86j2-b6v"/><path class="lc05vkmqz"/></g>`,
		"fallback": "streamline-flex:padlock-square-1",
	});
}

export default Component;
