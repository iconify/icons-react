import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gyo39-m2d.css';
import '../../css/s/sokkyvv6c.css';
import '../../css/r/rvn30zbso.css';
import '../../css/s/s9j1rccjl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gyo39-m2d"/><path class="sokkyvv6c"/><path class="rvn30zbso"/><path class="s9j1rccjl"/></g>`,
		"fallback": "glyphs:object-group-outline",
	});
}

export default Component;
