import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/it6vkbbwq.css';
import '../../css/z/z-uxqbq1d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="it6vkbbwq"/><path class="z-uxqbq1d"/></g>`,
		"fallback": "streamline:school-bus-side",
	});
}

export default Component;
