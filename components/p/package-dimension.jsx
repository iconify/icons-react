import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xi4ehhegl.css';
import '../../css/p/pumr0d1wv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xi4ehhegl"/><path class="pumr0d1wv"/></g>`,
		"fallback": "streamline-flex:package-dimension",
	});
}

export default Component;
