import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/adgfawbax.css';
import '../../css/z/z-k_2ib8t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="adgfawbax"/><path class="z-k_2ib8t"/></g>`,
		"fallback": "streamline:lost-and-found",
	});
}

export default Component;
