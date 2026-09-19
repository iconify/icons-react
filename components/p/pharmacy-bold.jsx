import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omb1ouktv.css';
import '../../css/t/tnz8a7sye.css';
import '../../css/a/aqarijb0i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="omb1ouktv"/><path clip-rule="evenodd" class="tnz8a7sye"/><path class="aqarijb0i"/></g>`,
		"fallback": "glyphs:pharmacy-bold",
	});
}

export default Component;
