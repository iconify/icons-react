import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vgrnl84ou.css';
import '../../css/e/efu_9yb_l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="vgrnl84ou"/><path class="efu_9yb_l"/></g>`,
		"fallback": "glyphs-poly:user",
	});
}

export default Component;
