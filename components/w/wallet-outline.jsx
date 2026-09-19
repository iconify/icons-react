import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz_vbibin.css';
import '../../css/x/xb-o3nqnz.css';
import '../../css/u/u_ozfpbev.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="qz_vbibin"/><path class="xb-o3nqnz"/><path class="u_ozfpbev"/>`,
		"fallback": "ion:wallet-outline",
	});
}

export default Component;
