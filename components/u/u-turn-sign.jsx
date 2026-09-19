import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9f-8qbgv.css';
import '../../css/m/m9v16xb5u.css';
import '../../css/y/ygex-6bzt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(45 40 6)" class="b9f-8qbgv"/><path class="m9v16xb5u"/><path class="ygex-6bzt"/></g>`,
		"fallback": "glyphs-poly:u-turn-sign",
	});
}

export default Component;
