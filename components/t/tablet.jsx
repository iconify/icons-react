import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qojb79vkl.css';
import '../../css/p/p3-bwf-tg.css';
import '../../css/y/ycfdc-bvw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qojb79vkl"/><path class="p3-bwf-tg"/><path clip-rule="evenodd" class="ycfdc-bvw"/></g>`,
		"fallback": "glyphs-poly:tablet",
	});
}

export default Component;
