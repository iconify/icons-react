import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vzq47ekbe.css';
import '../../css/k/k-dfc3byz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vzq47ekbe"/><path class="k-dfc3byz"/></g>`,
		"fallback": "streamline-flex:new-sticky-note",
	});
}

export default Component;
