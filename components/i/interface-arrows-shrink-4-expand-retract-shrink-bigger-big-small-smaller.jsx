import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x5u7uu_tp.css';
import '../../css/s/sg7e2zvub.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect transform="rotate(180 8.5 5.5)" class="x5u7uu_tp"/><path class="sg7e2zvub"/></g>`,
		"fallback": "streamline:interface-arrows-shrink-4-expand-retract-shrink-bigger-big-small-smaller",
	});
}

export default Component;
