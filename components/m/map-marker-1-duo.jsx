import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhzph8bkc.css';
import '../../css/r/r846li6xf.css';
import '../../css/l/lmk_giezu.css';
import '../../css/q/qsx_5mogf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fhzph8bkc"/><path class="r846li6xf"/><path class="lmk_giezu"/><path class="qsx_5mogf"/></g>`,
		"fallback": "glyphs:map-marker-1-duo",
	});
}

export default Component;
