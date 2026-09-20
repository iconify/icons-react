import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l8tg53bnq.css';
import '../../css/s/s_n-7sb1p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l8tg53bnq"/><path class="s_n-7sb1p"/></g>`,
		"fallback": "streamline-flex:show-layer",
	});
}

export default Component;
