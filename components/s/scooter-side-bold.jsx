import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f12w4dbvr.css';
import '../../css/h/hqiubxb6c.css';
import '../../css/i/ii92e0b8g.css';
import '../../css/s/sjzpytnux.css';
import '../../css/d/dpknjbccx.css';
import '../../css/p/pgmlw78hs.css';
import '../../css/d/d8e89ybho.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f12w4dbvr"/><path clip-rule="evenodd" class="hqiubxb6c"/><path class="ii92e0b8g"/><rect class="sjzpytnux"/><path class="dpknjbccx"/><path class="pgmlw78hs"/><path class="d8e89ybho"/></g>`,
		"fallback": "glyphs:scooter-side-bold",
	});
}

export default Component;
