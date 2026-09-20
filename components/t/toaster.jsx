import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a62_2ql-m.css';
import '../../css/v/vs20wtbvz.css';
import '../../css/m/m1cmcxbib.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="a62_2ql-m"/><path class="vs20wtbvz"/><path class="m1cmcxbib"/></g>`,
		"fallback": "streamline-flex:toaster",
	});
}

export default Component;
