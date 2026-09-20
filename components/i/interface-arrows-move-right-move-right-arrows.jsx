import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c8m-46byg.css';
import '../../css/h/hwza-gbef.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c8m-46byg"/><rect transform="rotate(-180 2.75 7)" class="hwza-gbef"/></g>`,
		"fallback": "streamline:interface-arrows-move-right-move-right-arrows",
	});
}

export default Component;
