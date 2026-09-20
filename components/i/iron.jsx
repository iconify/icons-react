import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/ta9n-cbnj.css';
import '../../css/w/wqx7ggb3v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ta9n-cbnj"/><path class="wqx7ggb3v"/></g>`,
		"fallback": "streamline-flex:iron",
	});
}

export default Component;
