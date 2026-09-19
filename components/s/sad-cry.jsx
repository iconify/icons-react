import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/v/vnl0nvbii.css';
import '../../css/s/smvgl5sak.css';
import '../../css/h/h9qr1objm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am770-rkn"/><rect class="vnl0nvbii"/><path class="smvgl5sak"/><path class="h9qr1objm"/></g>`,
		"fallback": "glyphs-poly:sad-cry",
	});
}

export default Component;
