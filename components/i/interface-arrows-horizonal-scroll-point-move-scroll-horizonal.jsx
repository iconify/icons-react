import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l29ncobrn.css';
import '../../css/u/untf9pflr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l29ncobrn"/><circle class="untf9pflr"/></g>`,
		"fallback": "streamline:interface-arrows-horizonal-scroll-point-move-scroll-horizonal",
	});
}

export default Component;
