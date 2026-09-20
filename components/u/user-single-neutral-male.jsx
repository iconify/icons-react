import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qq_emibqm.css';
import '../../css/y/ycc8a0rnr.css';
import '../../css/d/dghxst7hb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qq_emibqm"/><path class="ycc8a0rnr"/><path class="dghxst7hb"/></g>`,
		"fallback": "streamline:user-single-neutral-male",
	});
}

export default Component;
