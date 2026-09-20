import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/he_r8ac7b.css';
import '../../css/r/rl2gn8bfm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="he_r8ac7b"/><path class="rl2gn8bfm"/></g>`,
		"fallback": "streamline-flex:sign-at",
	});
}

export default Component;
