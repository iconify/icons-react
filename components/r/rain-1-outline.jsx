import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pnt4g603j.css';
import '../../css/l/llko_jr5u.css';
import '../../css/k/k4xzy-b1d.css';
import '../../css/c/cv-_ylbeb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pnt4g603j"/><path class="llko_jr5u"/><path class="k4xzy-b1d"/><path class="cv-_ylbeb"/></g>`,
		"fallback": "glyphs:rain-1-outline",
	});
}

export default Component;
