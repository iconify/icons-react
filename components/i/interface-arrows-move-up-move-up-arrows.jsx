import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jft49xbjo.css';
import '../../css/t/tko6mlvex.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jft49xbjo"/><rect transform="rotate(90 7 11.25)" class="tko6mlvex"/></g>`,
		"fallback": "streamline:interface-arrows-move-up-move-up-arrows",
	});
}

export default Component;
