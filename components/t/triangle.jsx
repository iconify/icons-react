import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5pagnbnu.css';
import '../../css/d/dv_z55b5j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q5pagnbnu"/><path class="dv_z55b5j"/></g>`,
		"fallback": "glyphs-poly:triangle",
	});
}

export default Component;
