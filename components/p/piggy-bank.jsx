import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i8isimbxa.css';
import '../../css/z/z23x_6e1e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i8isimbxa"/><path class="z23x_6e1e"/></g>`,
		"fallback": "streamline:piggy-bank",
	});
}

export default Component;
