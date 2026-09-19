import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1ybgbbdc.css';
import '../../css/i/i8z0jbt_r.css';
import '../../css/v/vpkefzb4t.css';
import '../../css/m/m58z14bch.css';
import '../../css/v/vnm3c7e4s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r1ybgbbdc"/><path class="i8z0jbt_r"/><path class="vpkefzb4t"/><path class="m58z14bch"/><path clip-rule="evenodd" class="vnm3c7e4s"/></g>`,
		"fallback": "glyphs-poly:layer-back",
	});
}

export default Component;
