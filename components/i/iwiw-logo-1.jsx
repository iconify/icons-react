import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cix5aghut.css';
import '../../css/j/jc2yhzb7h.css';
import '../../css/c/cqz215b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path clip-rule="evenodd" class="cix5aghut"/><path clip-rule="evenodd" class="jc2yhzb7h"/><path class="cqz215b4s"/></g>`,
		"fallback": "streamline-logos:iwiw-logo-1",
	});
}

export default Component;
