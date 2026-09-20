import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n-g-7qpsq.css';
import '../../css/j/jljwkmbhw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n-g-7qpsq"/><path class="jljwkmbhw"/></g>`,
		"fallback": "streamline:visible",
	});
}

export default Component;
