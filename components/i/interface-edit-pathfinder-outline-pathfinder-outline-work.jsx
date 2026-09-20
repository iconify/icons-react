import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z54h9wt2s.css';
import '../../css/s/sv1d2ubtn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z54h9wt2s"/><path class="sv1d2ubtn"/></g>`,
		"fallback": "streamline:interface-edit-pathfinder-outline-pathfinder-outline-work",
	});
}

export default Component;
