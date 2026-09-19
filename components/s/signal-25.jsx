import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh4fxacll.css';
import '../../css/s/sn46gjb0y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wh4fxacll"/><path clip-rule="evenodd" class="sn46gjb0y"/></g>`,
		"fallback": "glyphs-poly:signal-25",
	});
}

export default Component;
