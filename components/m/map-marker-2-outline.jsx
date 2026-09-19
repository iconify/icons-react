import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/frd2xy4_s.css';
import '../../css/c/c8uqgwu0z.css';
import '../../css/w/w7szrji6j.css';
import '../../css/u/u3b88k18b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="frd2xy4_s"/><path class="c8uqgwu0z"/><path class="w7szrji6j"/><path class="u3b88k18b"/></g>`,
		"fallback": "glyphs:map-marker-2-outline",
	});
}

export default Component;
