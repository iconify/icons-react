import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w_80n7_og.css';
import '../../css/w/w-m-gnb8j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w_80n7_og"/><path class="w-m-gnb8j"/></g>`,
		"fallback": "streamline:interface-arrows-curvy-left-snake-arrow-sideways-diagram-left",
	});
}

export default Component;
