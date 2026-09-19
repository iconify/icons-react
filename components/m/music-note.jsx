import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/yp2pgobra.css';
import '../../css/t/t2s1tmb8r.css';
import '../../css/w/wa95x5b1d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="yp2pgobra"/><ellipse class="t2s1tmb8r"/><path class="wa95x5b1d"/></g>`,
		"fallback": "glyphs-poly:music-note",
	});
}

export default Component;
