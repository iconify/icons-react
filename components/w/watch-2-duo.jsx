import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/riw1v_byq.css';
import '../../css/y/yfyzj29wb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="riw1v_byq"/><path class="yfyzj29wb"/></g>`,
		"fallback": "glyphs:watch-2-duo",
	});
}

export default Component;
