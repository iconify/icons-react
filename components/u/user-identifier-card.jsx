import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yf3vvwebd.css';
import '../../css/b/bjtncabwp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yf3vvwebd"/><path class="bjtncabwp"/></g>`,
		"fallback": "streamline-flex:user-identifier-card",
	});
}

export default Component;
