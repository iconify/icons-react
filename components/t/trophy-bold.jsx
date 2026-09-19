import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wituw_-ul.css';
import '../../css/u/u378u-36s.css';
import '../../css/q/qjlo9vzdc.css';
import '../../css/y/y0_pg-75f.css';
import '../../css/p/pd5v97bbw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wituw_-ul"/><path class="u378u-36s"/><path clip-rule="evenodd" class="qjlo9vzdc"/><path class="y0_pg-75f"/><path class="pd5v97bbw"/></g>`,
		"fallback": "glyphs:trophy-bold",
	});
}

export default Component;
