import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qz6iu8b0e.css';
import '../../css/f/f-wka2cbh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qz6iu8b0e"/><path class="f-wka2cbh"/></g>`,
		"fallback": "streamline-flex:warehouse-1",
	});
}

export default Component;
