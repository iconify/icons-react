import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pkutg6b-h.css';
import '../../css/r/ryesqtkzc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pkutg6b-h"/><path class="ryesqtkzc"/></g>`,
		"fallback": "streamline:shield-cross",
	});
}

export default Component;
