import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xr6selbya.css';
import '../../css/f/fsdcy2b0y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="xr6selbya"/><path class="fsdcy2b0y"/></g>`,
		"fallback": "glyphs-poly:stream",
	});
}

export default Component;
