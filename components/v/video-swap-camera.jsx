import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kw5txwb9y.css';
import '../../css/x/x512ovbom.css';
import '../../css/z/zpedpbbsy.css';
import '../../css/d/drngy167u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kw5txwb9y"/><path class="x512ovbom"/><path class="zpedpbbsy"/><path class="drngy167u"/></g>`,
		"fallback": "streamline:video-swap-camera",
	});
}

export default Component;
