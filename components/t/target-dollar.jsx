import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bgj-y-ewu.css';
import '../../css/h/hkhcfdb3y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bgj-y-ewu"/><path class="hkhcfdb3y"/></g>`,
		"fallback": "streamline-flex:target-dollar",
	});
}

export default Component;
