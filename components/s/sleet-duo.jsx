import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxg3o6b4o.css';
import '../../css/b/byrkhybct.css';
import '../../css/q/q1czuacal.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gxg3o6b4o"/><path class="byrkhybct"/><path class="q1czuacal"/></g>`,
		"fallback": "glyphs:sleet-duo",
	});
}

export default Component;
