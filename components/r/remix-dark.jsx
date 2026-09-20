import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjo3wbrwo.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ij37156fo.css';
import '../../css/b/bbld177ls.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGxXTqGcUX" class="pjo3wbrwo"/></defs><g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><use href="#SVGxXTqGcUX" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGxXTqGcUX" clip-rule="evenodd" class="d2kvgvbvc"/><path class="ij37156fo"/><path class="bbld177ls"/></g>`,
		"fallback": "skill-icons:remix-dark",
	});
}

export default Component;
