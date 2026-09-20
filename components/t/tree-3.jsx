import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rjk9u0r2h.css';
import '../../css/r/re1pwxbjr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rjk9u0r2h"/><path class="re1pwxbjr"/></g>`,
		"fallback": "streamline:tree-3",
	});
}

export default Component;
