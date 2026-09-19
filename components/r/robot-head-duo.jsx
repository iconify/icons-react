import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zoywegbvg.css';
import '../../css/z/zwwuljxif.css';
import '../../css/e/e0chke9dm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zoywegbvg"/><path class="zwwuljxif"/><path class="e0chke9dm"/></g>`,
		"fallback": "glyphs:robot-head-duo",
	});
}

export default Component;
