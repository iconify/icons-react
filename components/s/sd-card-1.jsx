import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6o4-fb_f.css';
import '../../css/l/lefajib7x.css';
import '../../css/w/wai_u1bew.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n6o4-fb_f"/><path class="lefajib7x"/><path class="wai_u1bew"/></g>`,
		"fallback": "glyphs-poly:sd-card-1",
	});
}

export default Component;
