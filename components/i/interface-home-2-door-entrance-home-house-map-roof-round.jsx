import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p5y70cbdg.css';
import '../../css/j/jkdae0bwt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p5y70cbdg"/><path class="jkdae0bwt"/></g>`,
		"fallback": "streamline:interface-home-2-door-entrance-home-house-map-roof-round",
	});
}

export default Component;
