import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pifz1vb5p.css';
import '../../css/n/njizle4no.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pifz1vb5p"/><path class="njizle4no"/></g>`,
		"fallback": "glyphs:search-1-duo",
	});
}

export default Component;
