import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x5u7uu_tp.css';
import '../../css/e/euklbvbua.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect transform="rotate(180 8.5 5.5)" class="x5u7uu_tp"/><path class="euklbvbua"/></g>`,
		"fallback": "streamline:interface-arrows-expand-4-expand-small-bigger-retract-smaller-big",
	});
}

export default Component;
