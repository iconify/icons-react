import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z8p2h1bsw.css';
import '../../css/s/soio5ccvo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z8p2h1bsw"/><path class="soio5ccvo"/></g>`,
		"fallback": "streamline:transfer-van",
	});
}

export default Component;
