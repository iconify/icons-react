import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i61-5eu8p.css';
import '../../css/a/a02_28-jy.css';
import '../../css/f/fihkqhbur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i61-5eu8p"/><path class="a02_28-jy"/><path class="fihkqhbur"/></g>`,
		"fallback": "streamline-flex:spiral-shape",
	});
}

export default Component;
