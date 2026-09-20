import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/ktiy1eo4g.css';
import '../../css/i/itix4o8yy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ktiy1eo4g"/><path class="itix4o8yy"/></g>`,
		"fallback": "streamline:pathfinder-exclude",
	});
}

export default Component;
