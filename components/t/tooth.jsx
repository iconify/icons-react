import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pxcrb5bhl.css';
import '../../css/q/qqytjedtt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pxcrb5bhl"/><path class="qqytjedtt"/></g>`,
		"fallback": "streamline-flex:tooth",
	});
}

export default Component;
