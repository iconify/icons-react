import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/indd70b4g.css';
import '../../css/u/uw9-_9bsw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="indd70b4g"/><path class="uw9-_9bsw"/></g>`,
		"fallback": "streamline:lipstick",
	});
}

export default Component;
