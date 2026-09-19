import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaiyq5bvp.css';
import '../../css/d/disvglb_n.css';
import '../../css/z/zcjdx8bee.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qaiyq5bvp"><path class="disvglb_n"/><path class="zcjdx8bee"/></g>`,
		"fallback": "catppuccin:svelte",
	});
}

export default Component;
