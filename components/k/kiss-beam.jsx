import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/y/y31nl7bsa.css';
import '../../css/s/smvgl5sak.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am770-rkn"/><path class="y31nl7bsa"/><path class="smvgl5sak"/></g>`,
		"fallback": "glyphs-poly:kiss-beam",
	});
}

export default Component;
