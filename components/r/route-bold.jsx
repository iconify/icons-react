import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f886c8bin.css';
import '../../css/k/kangm0rqb.css';
import '../../css/s/sx3zoybsb.css';
import '../../css/g/gjh5sqboo.css';
import '../../css/g/gfs1b9nrx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f886c8bin"/><path clip-rule="evenodd" class="kangm0rqb"/><path class="sx3zoybsb"/><path clip-rule="evenodd" class="gjh5sqboo"/><path class="gfs1b9nrx"/></g>`,
		"fallback": "glyphs:route-bold",
	});
}

export default Component;
