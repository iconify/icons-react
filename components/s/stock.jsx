import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unrrcibpo.css';
import '../../css/p/pyzl13r-s.css';
import '../../css/c/cw6plkbph.css';
import '../../css/y/yo17hwt9i.css';
import '../../css/r/r3zacpb6c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="unrrcibpo"/><path class="pyzl13r-s"/><path class="cw6plkbph"/><path class="yo17hwt9i"/><path class="r3zacpb6c"/></g>`,
		"fallback": "streamline-color:stock",
	});
}

export default Component;
