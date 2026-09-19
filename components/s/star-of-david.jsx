import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkntsabjl.css';
import '../../css/s/si3vjzbss.css';
import '../../css/w/w2qia4l8w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bkntsabjl"/><path class="si3vjzbss"/><path clip-rule="evenodd" class="w2qia4l8w"/></g>`,
		"fallback": "glyphs-poly:star-of-david",
	});
}

export default Component;
