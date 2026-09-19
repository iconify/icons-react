import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/ucionx-lv.css';
import '../../css/y/ybxw_bc8q.css';
import '../../css/i/id7402b9s.css';
import '../../css/a/ayju-qj-s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="ucionx-lv"/><ellipse class="ybxw_bc8q"/><path class="id7402b9s"/><path class="ayju-qj-s"/></g>`,
		"fallback": "glyphs-poly:music-list",
	});
}

export default Component;
