import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wr5lmfzzp.css';
import '../../css/r/rr6yxmb6f.css';
import '../../css/c/crs0k7bit.css';
import '../../css/y/yw6_fjbsi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wr5lmfzzp"/><path class="rr6yxmb6f"/><path class="crs0k7bit"/><path class="yw6_fjbsi"/></g>`,
		"fallback": "glyphs:running-duo",
	});
}

export default Component;
