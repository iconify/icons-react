import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nbwa9ublz.css';
import '../../css/k/kxpox3n1d.css';
import '../../css/r/r-xvhpbej.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nbwa9ublz"/><path class="kxpox3n1d"/><path class="r-xvhpbej"/></g>`,
		"fallback": "streamline-flex:printer",
	});
}

export default Component;
