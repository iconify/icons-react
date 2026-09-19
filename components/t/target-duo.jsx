import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om0w2ebyn.css';
import '../../css/e/e1mtzabaw.css';
import '../../css/p/ptkz2pb_u.css';
import '../../css/z/zi1iipb3g.css';
import '../../css/n/noy7d_9ce.css';
import '../../css/i/itl5pv92p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="om0w2ebyn"/><path class="e1mtzabaw"/><path class="ptkz2pb_u"/><path class="zi1iipb3g"/><path class="noy7d_9ce"/><path class="itl5pv92p"/></g>`,
		"fallback": "glyphs:target-duo",
	});
}

export default Component;
