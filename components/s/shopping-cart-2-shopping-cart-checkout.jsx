import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q1esbvbxj.css';
import '../../css/w/wji5d6sjo.css';
import '../../css/x/xl1fr1byu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q1esbvbxj"/><circle class="wji5d6sjo"/><circle class="xl1fr1byu"/></g>`,
		"fallback": "streamline:shopping-cart-2-shopping-cart-checkout",
	});
}

export default Component;
