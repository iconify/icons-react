import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uw6kyrbng.css';
import '../../css/s/snbrnrc_w.css';
import '../../css/o/olyp84b8n.css';
import '../../css/c/c007ltvaa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><g transform="translate(3)"><path class="uw6kyrbng"/><ellipse class="snbrnrc_w"/><path class="olyp84b8n"/></g><path class="c007ltvaa"/></g>`,
		"fallback": "si-glyph:solar-blind",
	});
}

export default Component;
