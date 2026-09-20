import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fi0fil8ok.css';
import '../../css/k/k0-tm54qt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fi0fil8ok"/><path class="k0-tm54qt"/></g>`,
		"fallback": "streamline-flex:piggy-bank",
	});
}

export default Component;
