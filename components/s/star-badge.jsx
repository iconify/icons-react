import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/ckux6ecyv.css';
import '../../css/j/jgufu3bie.css';
import '../../css/h/h_u4o-q2b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ckux6ecyv"/><path class="jgufu3bie"/><path class="h_u4o-q2b"/></g>`,
		"fallback": "streamline-flex:star-badge",
	});
}

export default Component;
