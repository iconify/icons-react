import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s4kmg0fxv.css';
import '../../css/h/hv2dvkbdj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s4kmg0fxv"/><path class="hv2dvkbdj"/></g>`,
		"fallback": "streamline-flex:search-history-browser",
	});
}

export default Component;
