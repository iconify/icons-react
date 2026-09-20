import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ut5ocqzgs.css';
import '../../css/h/hm2xg4blg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ut5ocqzgs"/><path class="hm2xg4blg"/></g>`,
		"fallback": "streamline:interface-arrows-curvy-right-snake-arrow-sideways-diagram-right",
	});
}

export default Component;
