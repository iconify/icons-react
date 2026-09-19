import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zi6je6_bc.css';
import '../../css/o/oqlix12bo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zi6je6_bc"/><path class="oqlix12bo"/></g>`,
		"fallback": "glyphs-poly:star",
	});
}

export default Component;
