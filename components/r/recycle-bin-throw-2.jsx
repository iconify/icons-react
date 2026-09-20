import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r59z3yb4i.css';
import '../../css/c/ctus5v0uu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="r59z3yb4i"/><path class="ctus5v0uu"/></g>`,
		"fallback": "streamline-flex:recycle-bin-throw-2",
	});
}

export default Component;
