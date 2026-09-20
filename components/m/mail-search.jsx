import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jmfhj460o.css';
import '../../css/r/r668vebvo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jmfhj460o"/><path class="r668vebvo"/></g>`,
		"fallback": "streamline:mail-search",
	});
}

export default Component;
