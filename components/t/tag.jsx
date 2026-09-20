import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pe9cxk9_n.css';
import '../../css/h/he_l7b3uu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pe9cxk9_n"/><path class="he_l7b3uu"/></g>`,
		"fallback": "streamline-flex:tag",
	});
}

export default Component;
