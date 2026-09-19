import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmd_ebe6d.css';
import '../../css/f/f01wpx3bc.css';
import '../../css/k/k5sacmbeu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nmd_ebe6d"/><path class="f01wpx3bc"/><rect class="k5sacmbeu"/></g>`,
		"fallback": "glyphs-poly:wallet",
	});
}

export default Component;
