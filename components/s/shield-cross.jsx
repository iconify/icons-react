import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q2qz_3nrc.css';
import '../../css/z/zwfrrtb0z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q2qz_3nrc"/><path class="zwfrrtb0z"/></g>`,
		"fallback": "streamline-flex:shield-cross",
	});
}

export default Component;
